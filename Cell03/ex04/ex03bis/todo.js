$(document).ready(function() {
    function saveTodoList() {
        const todos = [];
        $('#ft_list div').each(function() {
            todos.push($(this).text());
        });
        localStorage.setItem('todo_list', JSON.stringify(todos));
    }

    function addTodo(text) {
        const $todoItem = $('<div></div>').text(text);
        $todoItem.on('click', function() {
            if (confirm(`Do you really want to remove this item?\n"${text}"`)) {
                $(this).remove();
                saveTodoList();
            }
        });
        $('#ft_list').prepend($todoItem);
    }

    function loadTodoList() {
        const storedData = localStorage.getItem('todo_list');
        if (storedData) {
            try {
                const todos = JSON.parse(storedData);
                todos.reverse().forEach(function(text) {
                    if (text && text.trim() !== '') {
                        addTodo(text);
                    }
                });
            } catch (e) {
                console.error('Failed to parse todo storage:', e);
            }
        }
    }

    $('#newBtn').on('click', function() {
        const todoText = prompt('Enter a new TO DO:');
        if (todoText && todoText.trim() !== '') {
            addTodo(todoText.trim());
            saveTodoList();
        }
    });

    loadTodoList();
});