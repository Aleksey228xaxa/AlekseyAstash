function submitforms() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var age = document.forms["personalForm"]["age"].value;
    if (name === "" || email === "" || age === "") {
        alert("������������ ������ �� �������");
        return false;
    } else {
        alert("������ ������� ����������");
    }
}