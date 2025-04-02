$(function () {
    'use strict';



    // Loader
    $('.fakeLoader').fakeLoader({
        timeToHide: 1200,
        zIndex: "999",
        spinner: "spinner3",
        bgColor: "#212121"
    });

    // Smooth Scroll
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top - 50
            }, 850);
        }
    });

    // Hide navbar on mobile after click
    $('.navbar-nav a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Resume Carousel
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10
    });

    // Portfolio Filterizr
    $('.filtr-container').imagesLoaded(function() {
        $('.filtr-container').filterizr();
    });

    // Portfolio Filter
    $('.portfolio-filter-menu li').on('click', function() {
        $('.portfolio-filter-menu li').removeClass('active');
        $(this).addClass('active');
    });

    // Portfolio Popup
    $('.portfolio').magnificPopup({
        delegate: '.portfolio-popup',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Navbar Scroll Effect
    $(window).on("scroll", function() {
        const vScroll = $(this).scrollTop();
        $(".navbar").toggleClass("fix", vScroll > 100);
    });

    // Typing Animation
    const roles = [
        { text: "Software Engineer", color: "#00c6ff" },
        { text: "Aspiring Product Manager", color: "#24FE41" },
        { text: "Graphic Designer", color: "#FF8C42" },
        { text: "Photographer", color: "#FF2E63" }
    ];

    const typedText = document.querySelector(".typed-text");
    const cursor = document.querySelector(".cursor");
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function updateCursorPosition() {
        const textWidth = typedText.offsetWidth;
        cursor.style.left = `${textWidth}px`; // Direct pixel positioning
    }

    function type() {
        const currentRole = roles[roleIndex];
        const currentText = currentRole.text;

        if (!isDeleting) {
            // Typing phase
            typedText.textContent = currentText.slice(0, charIndex + 1);
            typedText.style.color = currentRole.color;
            cursor.style.backgroundColor = currentRole.color;
            typedText.style.transition = 'color 0.3s ease';
    cursor.style.transition = 'background-color 0.3s ease';
            charIndex++;

            updateCursorPosition();

            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else {
                setTimeout(type, 100);
            }
        } else {
            // Backspacing phase
            typedText.textContent = currentText.slice(0, charIndex - 1);
            charIndex--;

            updateCursorPosition();

            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, 50);
            }
        }
    }

    // Initialize cursor position
    updateCursorPosition();
    type();

    // Contact Form Scroll
    window.scrollToContact = function() {
        const contactSection = document.getElementById('contact');
        const navbar = document.querySelector('.navbar');

        if (contactSection && navbar) {
            const navbarHeight = navbar.offsetHeight;
            const offsetPosition = contactSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
});
