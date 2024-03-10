document.addEventListener('DOMContentLoaded', function() {
    // Seletor do menu sidebar
    var sidebar = document.querySelector('.sidebar');

    // Seletor do botão de abrir menu
    var openBtn = document.querySelector('.open-btn');

    // Seletor do botão de fechar menu
    var closeBtn = document.querySelector('.close-btn');

    // Função para abrir o menu
    function openSidebar() {
        sidebar.style.left = '0';
    }

    // Função para fechar o menu
    function closeSidebar() {
        sidebar.style.left = '-400px';
    }

    // Event listener para o botão de abrir menu
    openBtn.addEventListener('click', openSidebar);

    // Event listener para o botão de fechar menu
    closeBtn.addEventListener('click', closeSidebar);

    // Event listener para fechar o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        var isClickInside = sidebar.contains(event.target) || openBtn.contains(event.target);
        if (!isClickInside) {
            closeSidebar();
        }
    });
});