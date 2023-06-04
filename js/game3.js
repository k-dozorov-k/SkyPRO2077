function gameThree() {
    let qest = "Один — махай, Четыре — гуляй, Два — детям страсть, Четыре — всем сласть."
    ans = "корова";

    function qestions(qest, ans) {
        for (let i = 0; i < 3; i++) {
            let mystery = prompt(qest);
            if (mystery.toLowerCase() === ans) {
                alert(`Вы угадали с ${i + 1} попытки, ПОЗДРАВЛЯЮ!!!`);
                break;
            }
            if (mystery.toLowerCase() !== "корова" && i === 0) {
                alert("Вот тебе подсказка: Есть в каждой деревне")
            } if (mystery.toLowerCase() !== "корова" && i === 1) {
                alert("Вот тебе подсказка: За ними приглядывает пастух");
            }
            if (mystery.toLowerCase() !== "корова" && i === 2) {
                alert("Попробуй еще раз");
            }
        }
    }
    qestions(qest, ans);

}