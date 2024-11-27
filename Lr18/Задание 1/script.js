function getData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const subscribe = document.getElementById('subscribe').checked;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const country = document.getElementById('country').value;

    const output = `
        Имя: ${name} <br>
        Возраст: ${age} <br>
        Подписка: ${subscribe ? 'Да' : 'Нет'} <br>
        Пол: ${gender ? gender : 'Не указан'} <br>
        Страна: ${country}
    `;

    document.getElementById('output').innerHTML = output;
}
