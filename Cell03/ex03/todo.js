const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

function setCookie(name, value, days = 7) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

function saveTodoList() {
    const todos = [];
    const items = ftList.querySelectorAll('div');
    items.forEach(item => {
        todos.push(item.textContent);
    });
    setCookie('todo_list', todos);
}

function addTodo(text) {
    const todoItem = document.createElement('div');
    todoItem.textContent = text;
    todoItem.addEventListener('click', function() {
        if (confirm(`Do you really want to remove this item?\n"${text}"`)) {
            todoItem.remove();
            saveTodoList();
        }
    });
    ftList.insertBefore(todoItem, ftList.firstChild);
}

function loadTodoList() {
    const cookieData = getCookie('todo_list');
    if (cookieData) {
        try {
            const todos = JSON.parse(cookieData);
            todos.reverse().forEach(text => {
                if (text && text.trim() !== '') {
                    addTodo(text);
                }
            });
        } catch (e) {
            console.error('Failed to parse todo cookie:', e);
        }
    }
}

newBtn.addEventListener('click', function() {
    const todoText = prompt('Enter a new TO DO:');
    if (todoText && todoText.trim() !== '') {
        addTodo(todoText.trim());
        saveTodoList();
    }
});

loadTodoList();