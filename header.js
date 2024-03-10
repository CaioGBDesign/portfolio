document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('header-scroll');
        } else {
            header.classList.remove('header-scroll');
        }
    });
});