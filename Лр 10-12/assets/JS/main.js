function calculateFormula(x) {
    try {
        if (x === 2) {
            throw "Знаменатель не может быть равен 2. Введите другое значение x.";
        }

        const y = (Math.pow(x, 2) - 6 * x - 15) / (x - 2);
        return y;
    } catch (error) {
        alert(error);
    }
}

const x = prompt("Введите значение x:");

if (!isNaN(x)) {
    const result = calculateFormula(parseFloat(x));
    document.getElementById("result").innerText = `При x = ${x}, y = ${result}`;
} else {
    alert("Введите корректное числовое значение для x.");
}