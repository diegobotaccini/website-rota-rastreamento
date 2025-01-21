// Slider

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    const intervalTime = 7000; // Tempo de exibição por slide (em milissegundos)

    // Função para exibir o slide atual
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) slide.classList.add("active");
        });
    };

    // Função para alternar automaticamente entre os slides
    const autoSlide = () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    };

    // Inicia o slider automático
    setInterval(autoSlide, intervalTime);

    // Exibe o slide inicial
    showSlide(currentIndex);
});

// Menu Fixo

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const offsetTop = navbar.offsetTop;

    window.addEventListener("scroll", () => {
        if (window.scrollY > offsetTop) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    });
});

// Menu Burger

document.getElementById('burgerMenu').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
