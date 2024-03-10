// Adiciona um evento de clique a todas as divs com a classe "abrir-modal"
var divsAbrirModal = document.querySelectorAll('.abrir-modal');
divsAbrirModal.forEach(function(div) {
  div.addEventListener('click', function() {
    var modalAlvo = this.getAttribute('data-modal');
    var modal = document.getElementById(modalAlvo);
    modal.style.display = 'flex';
  });
});

// Adiciona um evento de clique a todos os modais
var modais = document.querySelectorAll('.modal');
modais.forEach(function(modal) {
  modal.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      this.style.display = 'none';
    }
  });
});

const closeButtons = document.querySelectorAll('.fechar-modal');
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popup = button.parentNode;
    popup.style.display = 'none';
  });
});