// Показать квиз при нажатии на кнопку
document.querySelector('.btn-quiz').addEventListener('click', function () {
    document.querySelector('.quiz').classList.remove('hidden');
});

// Переход на контактную форму
function redirectToContact() {
    window.location.href = "#contact";
}

// галерея
let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

function openModal(index) {
    currentImageIndex = index;
    modal.style.display = 'flex';
    modalImg.src = images[currentImageIndex].src;
}

function closeModal() {
    modal.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    modalImg.src = images[currentImageIndex].src;
}

//карта 
ymaps.ready(init);

function init() {
    var map = new ymaps.Map("map", {
        center: [55.850252, 37.487735], // Координаты Речного вокзала в Москве
        zoom: 15
    });

    var placemark = new ymaps.Placemark([55.850252, 37.487735], {
        balloonContent: 'Москва, Речной вокзал',
        iconCaption: 'М. Речной вокзал'
    });

    map.geoObjects.add(placemark);
}

//для кнопок каких-то
document.querySelector('.btn-contact').addEventListener('click', () => {
    document.querySelector('#contacts').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu ul');

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
