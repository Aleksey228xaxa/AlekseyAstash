function submitforms() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var age = document.forms["personalForm"]["age"].value;
    if (name === "" || email === "" || age === "") {
        alert("обязательные данные не введены");
        return false;
    } else {
        alert("заявка успешно отправлена");
    }
}