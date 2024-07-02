function executeOperators() {
    var result = "";

    // if
    var x = Math.floor(Math.random() * 10);
    if (x < 5) {
        result += "Переменная x меньше 5.<br>";
    } else {
        result += "Переменная x больше или равна 5.<br>";
    }

    // switch
    var color = "красный";
    switch (color) {
        case "красный":
            result += "Цвет красный.<br>";
            break;
        case "синий":
            result += "Цвет синий.<br>";
            break;
        default:
            result += "Другой цвет.<br>";
    }

    // for
    for (var i = 0; i < 5; i++) {
        result += "Итерация номер " + (i + 1) + "<br>";
    }

    // while
    var n = 0;
    while (n < 3) {
        result += "n равно " + n + "<br>";
        n++;
    }

    // do..while
    var m = 0;
    do {
        result += "m равно " + m + "<br>";
        m++;
    } while (m < 2);

    // break
    for (var j = 0; j < 10; j++) {
        if (j === 5) {
            break;
        }
        result += "j равно " + j + "<br>";
    }

    // continue
    for (var k = 0; k < 5; k++) {
        if (k === 2) {
            continue;
        }
        result += "k равно " + k + "<br>";
    }

    // return
    function multiply(a, b) {
        return a * b;
    }
    var product = multiply(3, 4);
    result += "Произведение чисел 3 и 4 равно " + product + "<br>";

    var resultsDiv = document.getElementById("results");//получаем ссылку на элемент с идентификатором "results" из DOM.
    resultsDiv.innerHTML = result;//устанавливаем содержимое этого элемента равным значению переменной result
}

document.getElementById('submitButton').addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение кнопки submit
    alert('Предупреждение: Не удалось отправить данные. Попробуйте позже.');
});

