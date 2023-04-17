// Menu mobile
const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu-mobile");
const menu = document.querySelector(".menu-mobile");

function handleButtonClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  event.stopPropagation();
  nav.classList.toggle("active");
  handleClickOutside(menu, () => {
    nav.classList.remove("active");
    setAria();
  });
  setAria();
}

function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target)) {
      targetElement.removeAttribute("data-target");
      html.removeEventListener("click", handleHTMLClick);
      html.removeEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }
  if (!targetElement.hasAttribute("data-target")) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);
    targetElement.setAttribute("data-target", "");
  }
}

function setAria() {
  const isActive = nav.classList.contains("active");
  btnMenu.setAttribute("aria-expanded", isActive);
  if (isActive) {
    btnMenu.setAttribute("aria-label", "Fechar Menu");
  } else {
    btnMenu.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);


// popups
// Seleciona todos os botões e itera sobre cada um
const buttons = document.querySelectorAll('.botao');
buttons.forEach((button) => {
  // Adiciona um listener de clique a cada botão
  button.addEventListener('click', () => {
    // Seleciona o ID do popup associado a este botão
    const popupId = button.getAttribute('data-popup');
    // Seleciona o elemento do DOM que possui o ID do popup
    const popup = document.getElementById(popupId);
    // Exibe o popup
    popup.style.display = 'grid';
  });
  // Impede que o clique dentro do botão se propague para fora dele
  button.querySelector('span').addEventListener('mousedown', (event) => {
    event.stopPropagation();
  });
});

// Adiciona um listener de clique em todo o documento
document.addEventListener('mousedown', (event) => {
  // Seleciona todos os popups
  const popups = document.querySelectorAll('.popup');
  // Verifica se o clique foi dentro de algum dos popups
  const isClickInsidePopup = Array.from(popups).some(popup => popup.contains(event.target));
  // Se o clique não foi dentro de nenhum popup, esconde todos eles
  if (!isClickInsidePopup) {
    Array.from(popups).forEach((popup) => {
      popup.style.display = 'none';
    });
  }
});


const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popup = button.parentNode;
    popup.style.display = 'none';
  });
});


// Direção de arte
const body = document.body;
const boxes = document.querySelectorAll(".box-pantene");
const paragraphs = document.querySelectorAll("p, h2");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Seleciona o elemento "span" dentro do elemento ".color-value" dentro do elemento clicado
    const colorValue = box.querySelector(".color-value span");
    // Obtém o valor do texto dentro do elemento "span"
    const backgroundColor = colorValue.innerText;

    // Obtém a cor atual do fundo do elemento #adobe
    const adobeBackgroundColor = document.querySelector("#adobe").style.backgroundColor;

    if (backgroundColor === "#21132C") {
      // Define a cor de fundo do elemento clicado como a cor obtida
      document.body.style.backgroundColor = backgroundColor;
      boxes.forEach((box) => {
        box.style.backgroundColor = "#ffffff";
      });
      document.querySelector("#adobe").style.backgroundColor = backgroundColor;

      // Define a cor dos parágrafos com base na cor atual do fundo do elemento #adobe
      if (adobeBackgroundColor === backgroundColor) {
        paragraphs.forEach((p) => {
          p.style.color = "#21132C";
        });
      } else {
        paragraphs.forEach((p) => {
          p.style.color = "#ffffff";
        });
      }
    } else {
      // Define a cor de fundo de todos os elementos como branco
      boxes.forEach((box) => {
        box.style.backgroundColor = "#ffffff";
      });
      document.querySelector("#adobe").style.backgroundColor = backgroundColor;
      paragraphs.forEach((p) => {
        p.style.color = "#ffffff";
      });
    }
  });
});


//Softwares
$(document).ready(function() {
  $('#open-popup-button').click(function() {
    $('.software-background').addClass('animated');
  });
});


// Copiar e-mail
function CopiarNadia()
{
  navigator.clipboard.writeText('nadiazarour@gmail.com').then(() => 
  { 
    console.log('codigo copiado')
  }); 
}

function CopiarLuisa()
{
  navigator.clipboard.writeText('luisacagnini03@gmail.com').then(() => 
  { 
    console.log('codigo copiado')
  }); 
}

function CopiarRafael()
{
  navigator.clipboard.writeText('rholtzbr@gmail.com').then(() => 
  { 
    console.log('codigo copiado')
  }); 
}

function CopiarRoger()
{
  navigator.clipboard.writeText('rogertgoulart@gmail.com').then(() => 
  { 
    console.log('codigo copiado')
  }); 
}

window.addEventListener('scroll', function() {
  var headerDesktop = document.querySelector('.header-desktop');
  if (window.scrollY > 100) {
    headerDesktop.classList.add('header-background');
  } else {
    headerDesktop.classList.remove('header-background');
  }
});
