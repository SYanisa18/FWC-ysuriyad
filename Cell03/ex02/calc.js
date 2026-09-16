function isPositiveInteger(str) {
    if (!str || str.trim() === '' || !/^\d+$/.test(str.trim())) {
        return false;
    }
    const num = Number(str);
    return Number.isInteger(num) && num >= 0;
}
const calcForm = document.getElementById('calcForm');
const leftInput = document.getElementById('leftNum');
const rightInput = document.getElementById('rightNum');
const operatorSelect = document.getElementById('operator');
calcForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const leftStr = leftInput.value;
    const rightStr = rightInput.value;
    if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
        alert('Error :(');
        return;
    }
    const leftNum = parseInt(leftStr, 10);
    const rightNum = parseInt(rightStr, 10);
    const op = operatorSelect.value;
    if ((op === '/' || op === '%') && rightNum === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }
    let result;
    switch (op) {
        case '+':
            result = leftNum + rightNum;
            break;
        case '-':
            result = leftNum - rightNum;
            break;
        case '*':
            result = leftNum * rightNum;
            break;
        case '/':
            result = leftNum / rightNum;
            break;
        case '%':
            result = leftNum % rightNum;
            break;
    }
    alert(result);
    console.log(result);
});
setInterval(function() {
    alert('Please, use me...');
}, 30000);