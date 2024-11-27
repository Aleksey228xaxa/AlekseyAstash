// 1. Drag & Drop события
const draggable = document.createElement('div');
draggable.textContent = 'image';
draggable.style.width = '20%';
draggable.style.height = '10%';
draggable.style.backgroundColor = '#ff6a00';
draggable.style.position = 'absolute';
draggable.style.cursor = 'grab';
document.body.appendChild(draggable);

draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', null); // Необходимо для Firefox
});

document.addEventListener('dragover', (e) => {
    e.preventDefault(); // Позволяет сбрасывать элемент в данной области
});

document.addEventListener('drop', (e) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    draggable.style.left = `${x}px`;
    draggable.style.top = `${y}px`;
});
function toggleDropdown() {
    var dropdownList = document.getElementById("dropdown-list");
    if (dropdownList.style.display === "none") {
        dropdownList.style.display = "block";
    } else {
        dropdownList.style.display = "none";
    }
}

document.addEventListener("click", function (event) {
    var dropdown = document.getElementsByClassName("dropdown")[0];
    if (!dropdown.contains(event.target)) {
        document.getElementById("dropdown-list").style.display = "none";
    }
});

const fullScreenImg = document.getElementById('fullScreenImg');

fullScreenImg.addEventListener('click', function () {
    fullScreenImg.requestFullscreen();
});

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").classList.add("show");
        document.getElementById("scrollToTopBtn").classList.remove("hide");
    } else {
        document.getElementById("scrollToTopBtn").classList.add("hide");
        document.getElementById("scrollToTopBtn").classList.remove("show");
    }
}

// Плавный подъем страницы вверх при нажатии на кнопку
function scrollToTop() {
    const scrollToTop = window.setInterval(function () {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // Скорость прокрутки
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 5); // Интервал прокрутки
}


$(document).ready(function () {
    var slideWidth = $('.vacancies_block').outerWidth();

    function moveLeft() {
        $('.slider').css('left', -slideWidth);
        $('.vacancies_block:last-child').prependTo('.slider');
        $('.slider').css('left', 0);
    };

    function moveRight() {
        $('.slider').css('left', slideWidth);
        $('.vacancies_block:first-child').appendTo('.slider');
        $('.slider').css('left', 0);
    };

    $('#left-arrow').click(function () {
        moveLeft();
    });

    $('#right-arrow').click(function () {
        moveRight();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var image = document.querySelector(".WhatsAPP");

    // Анимация при наведении
    image.addEventListener("mouseover", function () {
        image.style.transform = "scale(1.1)"; // Увеличиваем размер картинки
    });

    // Анимация при отводе курсора
    image.addEventListener("mouseout", function () {
        image.style.transform = "scale(1)"; // Возвращаем исходный размер картинки
    });

    // Анимация при клике
    image.addEventListener("click", function () {
        image.style.opacity = "0.5"; // Устанавливаем прозрачность 0.5 при клике
    });
});


var ads = [
    "Купите деньги бесплатно без регистрации и смс",
    "!",
    "Уникальные услуги для вас и вашего бизнеса. Звоните прямо сейчас!"
];

// Функция для показа рекламного сообщения
function showAd() {
    var randomAd = ads[Math.floor(Math.random() * ads.length)]; // Выбираем случайное рекламное сообщение
    alert(randomAd); // Выводим сообщение в диалоговом окне
}

// Показываем рекламное сообщение каждые 10 секунд
setInterval(showAd, 100000);


// Функция для валидации email
function validateEmail(emailInput) {
    var email = emailInput.value;
    if (email.includes("mail.ru")) {
        emailInput.classList.remove("invalid");
        emailInput.classList.add("valid");
    } else {
        emailInput.classList.remove("valid");
        emailInput.classList.add("invalid");
    }
}

// Добавляем обработчик события input к полю email
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', function () {
    validateEmail(emailInput); // Вызываем функцию валидации при вводе
});

function showVacancies() {
    document.querySelector('.vacancies-list').style.display = 'block';
}

function hideVacancies() {
    document.querySelector('.vacancies-list').style.display = 'none';
}

function addComment() {
    const button = document.querySelector('.button');
    button.title = 'Нажмите, чтобы связаться с нами'; // Устанавливаем комментарий при наведении на кнопку
}

const logo = document.getElementById('logo');

logo.addEventListener('click', () => {
    alert('Это логотип.');
});

const touchArea = document.getElementById('touchArea');

// Событие на начало касания
touchArea.addEventListener('touchstart', function (event) {
    touchArea.style.backgroundColor = 'lightgreen';
    touchArea.textContent = 'Касание начато';
    event.preventDefault(); // Предотвращаем стандартное поведение
});

// Событие на перемещение пальца
touchArea.addEventListener('touchmove', function (event) {
    touchArea.textContent = `Касание движется (${event.touches[0].clientX}, ${event.touches[0].clientY})`;
    event.preventDefault();
});

// Событие на окончание касания
touchArea.addEventListener('touchend', function (event) {
    touchArea.style.backgroundColor = 'lightblue';
    touchArea.textContent = 'Касание завершено';
    event.preventDefault();
});

// Событие на отмену касания
touchArea.addEventListener('touchcancel', function (event) {
    touchArea.style.backgroundColor = 'red';
    touchArea.textContent = 'Касание отменено';
    event.preventDefault();
});

document.addEventListener('keydown', function (event) {
    // Проверяем, что нажата клавиша Alt и M (маленькая или заглавная)
    if (event.altKey && (event.key === 'm' || event.key === 'M')) {
        event.preventDefault(); // Останавливаем стандартное поведение браузера, если оно есть

        // Выполняем действие — изменяем текст на странице
        const textElement = document.getElementById('myText');
        if (textElement) {
            textElement.innerText = 'Комбинация Alt + M нажата!';
        } else {
            alert('Элемент с id "myText" не найден!');
        }
    }
});