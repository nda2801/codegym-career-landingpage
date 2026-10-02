$(document).ready(function () {
    new WOW().init();

    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });

    $('#hero-quick-form, #contact-form').on('submit', function (e) {
        e.preventDefault();
        alert('Cảm ơn bạn đã đăng ký! Đội ngũ tư vấn sẽ liên hệ lại trong vòng 24 giờ.');
        this.reset();
    });
});