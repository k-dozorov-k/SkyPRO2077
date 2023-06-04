function gameOne() {
    let num = Number(prompt('Введите номер месяца'));
    if (num <= 0 || num >= 13) {
        alert('Вы ввели неверное число');
    }
    else if (num === 1 || num === 2 || num === 12) {
        alert('3имa');
    } else if (num >= 3 && num <= 5) {
        alert('Becнa');
    } else if (num >= 6 && num <= 8) {
        alert('Лeтo');
    } else {
        alert('Осень');
    }
}