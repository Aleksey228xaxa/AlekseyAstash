function getData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const subscribe = document.getElementById('subscribe').checked;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const country = document.getElementById('country').value;

    const output = `
        ���: ${name} <br>
        �������: ${age} <br>
        ��������: ${subscribe ? '��' : '���'} <br>
        ���: ${gender ? gender : '�� ������'} <br>
        ������: ${country}
    `;

    document.getElementById('output').innerHTML = output;
}
