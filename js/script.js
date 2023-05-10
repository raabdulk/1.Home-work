
function selectSeason(month = Number(prompt('Введите номер месяца'))) {
    if (month === 1 || 2 && month === 12) {
        return ("Зима")
    } else if ((month >= 3 && month <= 5)) {
        return ("Весна")
    } else if ((month >= 6 && month <= 8)) {
        return ("Лето")
    } else if ((month >= 9 && month <= 11)) {
        return ("Осень")
    } else {
        return ("Введите цифру от 1 до 12")
    }
}

console.log(selectSeason(month))