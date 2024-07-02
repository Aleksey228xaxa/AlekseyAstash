function calculateFormula(x) {
    try {
        if (x === 2) {
            throw "����������� �� ����� ���� ����� 2. ������� ������ �������� x.";
        }

        const y = (Math.pow(x, 2) - 6 * x - 15) / (x - 2);
        return y;
    } catch (error) {
        alert(error);
    }
}

const x = prompt("������� �������� x:");

if (!isNaN(x)) {
    const result = calculateFormula(parseFloat(x));
    document.getElementById("result").innerText = `��� x = ${x}, y = ${result}`;
} else {
    alert("������� ���������� �������� �������� ��� x.");
}