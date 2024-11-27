// 1. Drag & Drop �������
const draggable = document.createElement('div');
draggable.textContent = 'image';
draggable.style.width = '20%';
draggable.style.height = '10%';
draggable.style.backgroundColor = '#ff6a00';
draggable.style.position = 'absolute';
draggable.style.cursor = 'grab';
document.body.appendChild(draggable);

draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', null); // ���������� ��� Firefox
});

document.addEventListener('dragover', (e) => {
    e.preventDefault(); // ��������� ���������� ������� � ������ �������
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

// ������� ������ �������� ����� ��� ������� �� ������
function scrollToTop() {
    const scrollToTop = window.setInterval(function () {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // �������� ���������
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 5); // �������� ���������
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

    // �������� ��� ���������
    image.addEventListener("mouseover", function () {
        image.style.transform = "scale(1.1)"; // ����������� ������ ��������
    });

    // �������� ��� ������ �������
    image.addEventListener("mouseout", function () {
        image.style.transform = "scale(1)"; // ���������� �������� ������ ��������
    });

    // �������� ��� �����
    image.addEventListener("click", function () {
        image.style.opacity = "0.5"; // ������������� ������������ 0.5 ��� �����
    });
});


var ads = [
    "������ ������ ��������� ��� ����������� � ���",
    "!",
    "���������� ������ ��� ��� � ������ �������. ������� ����� ������!"
];

// ������� ��� ������ ���������� ���������
function showAd() {
    var randomAd = ads[Math.floor(Math.random() * ads.length)]; // �������� ��������� ��������� ���������
    alert(randomAd); // ������� ��������� � ���������� ����
}

// ���������� ��������� ��������� ������ 10 ������
setInterval(showAd, 100000);


// ������� ��� ��������� email
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

// ��������� ���������� ������� input � ���� email
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', function () {
    validateEmail(emailInput); // �������� ������� ��������� ��� �����
});

function showVacancies() {
    document.querySelector('.vacancies-list').style.display = 'block';
}

function hideVacancies() {
    document.querySelector('.vacancies-list').style.display = 'none';
}

function addComment() {
    const button = document.querySelector('.button');
    button.title = '�������, ����� ��������� � ����'; // ������������� ����������� ��� ��������� �� ������
}

const logo = document.getElementById('logo');

logo.addEventListener('click', () => {
    alert('��� �������.');
});

const touchArea = document.getElementById('touchArea');

// ������� �� ������ �������
touchArea.addEventListener('touchstart', function (event) {
    touchArea.style.backgroundColor = 'lightgreen';
    touchArea.textContent = '������� ������';
    event.preventDefault(); // ������������� ����������� ���������
});

// ������� �� ����������� ������
touchArea.addEventListener('touchmove', function (event) {
    touchArea.textContent = `������� �������� (${event.touches[0].clientX}, ${event.touches[0].clientY})`;
    event.preventDefault();
});

// ������� �� ��������� �������
touchArea.addEventListener('touchend', function (event) {
    touchArea.style.backgroundColor = 'lightblue';
    touchArea.textContent = '������� ���������';
    event.preventDefault();
});

// ������� �� ������ �������
touchArea.addEventListener('touchcancel', function (event) {
    touchArea.style.backgroundColor = 'red';
    touchArea.textContent = '������� ��������';
    event.preventDefault();
});

document.addEventListener('keydown', function (event) {
    // ���������, ��� ������ ������� Alt � M (��������� ��� ���������)
    if (event.altKey && (event.key === 'm' || event.key === 'M')) {
        event.preventDefault(); // ������������� ����������� ��������� ��������, ���� ��� ����

        // ��������� �������� � �������� ����� �� ��������
        const textElement = document.getElementById('myText');
        if (textElement) {
            textElement.innerText = '���������� Alt + M ������!';
        } else {
            alert('������� � id "myText" �� ������!');
        }
    }
});