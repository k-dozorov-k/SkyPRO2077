function gameTwo() {

    let word = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    word = word.sort(() => Math.random() - 0.5);
    alert(word);
    let firstWord = prompt('Какое слово было первым?');
    let lastWord = prompt('Какое слово было последним?');
    if (word[0] === firstWord && word[6] === lastWord) {
        alert('Поздравляем Вы угадали оба слова!');
    } else if (word[0] === firstWord || word[6] === lastWord) {
        alert('Вы были близки к победе!');
    }
    else {
        alert('Вы ответили не верно');
    }

}