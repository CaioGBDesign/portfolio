function projetos() {
    if (document.getElementById('Figma').checked) {
        document.getElementById('projeto-Figma').style.display = 'block';
        document.getElementById('projeto-UX').style.display = 'none';
        document.getElementById('projeto-UI').style.display = 'none';
        document.getElementById('projeto-Blender').style.display = 'none';
    }
    else if(document.getElementById('UX').checked) {
        document.getElementById('projeto-Figma').style.display = 'none';
        document.getElementById('projeto-UX').style.display = 'block';
        document.getElementById('projeto-UI').style.display = 'none';
        document.getElementById('projeto-Blender').style.display = 'none';
   }
   else if(document.getElementById('UI').checked) {
       document.getElementById('projeto-Figma').style.display = 'none';
       document.getElementById('projeto-UX').style.display = 'none';
       document.getElementById('projeto-UI').style.display = 'block';
       document.getElementById('projeto-Blender').style.display = 'none';
  }
  else if(document.getElementById('Blender').checked) {
      document.getElementById('projeto-Figma').style.display = 'none';
      document.getElementById('projeto-UX').style.display = 'none';
      document.getElementById('projeto-UI').style.display = 'none';
      document.getElementById('projeto-Blender').style.display = 'block';
  }
}

function projetos2() {
    if (document.getElementById('AI').checked) {
        document.getElementById('projeto-AI').style.display = 'block';
        document.getElementById('projeto-PS').style.display = 'none';
        document.getElementById('projeto-AE').style.display = 'none';
        document.getElementById('projeto-PR').style.display = 'none';
    }
    else if(document.getElementById('PS').checked) {
        document.getElementById('projeto-AI').style.display = 'none';
        document.getElementById('projeto-PS').style.display = 'block';
        document.getElementById('projeto-AE').style.display = 'none';
        document.getElementById('projeto-PR').style.display = 'none';
   }
   else if(document.getElementById('AE').checked) {
    document.getElementById('projeto-AI').style.display = 'none';
    document.getElementById('projeto-PS').style.display = 'none';
    document.getElementById('projeto-AE').style.display = 'block';
    document.getElementById('projeto-PR').style.display = 'none';
  }
  else if(document.getElementById('PR').checked) {
    document.getElementById('projeto-AI').style.display = 'none';
    document.getElementById('projeto-PS').style.display = 'none';
    document.getElementById('projeto-AE').style.display = 'none';
    document.getElementById('projeto-PR').style.display = 'block';
  }
}

function projetos3() {
    if (document.getElementById('HTML').checked) {
        document.getElementById('projeto-HTML').style.display = 'block';
        document.getElementById('projeto-ACSS').style.display = 'none';
        document.getElementById('projeto-CSS').style.display = 'none';
        document.getElementById('projeto-JS').style.display = 'none';
    }
    else if(document.getElementById('ACSS').checked) {
        document.getElementById('projeto-HTML').style.display = 'none';
        document.getElementById('projeto-ACSS').style.display = 'block';
        document.getElementById('projeto-CSS').style.display = 'none';
        document.getElementById('projeto-JS').style.display = 'none';
   }
   else if(document.getElementById('CSS').checked) {
    document.getElementById('projeto-HTML').style.display = 'none';
    document.getElementById('projeto-ACSS').style.display = 'none';
    document.getElementById('projeto-CSS').style.display = 'block';
    document.getElementById('projeto-JS').style.display = 'none';
  }
  else if(document.getElementById('JS').checked) {
    document.getElementById('projeto-HTML').style.display = 'none';
    document.getElementById('projeto-ACSS').style.display = 'none';
    document.getElementById('projeto-CSS').style.display = 'none';
    document.getElementById('projeto-JS').style.display = 'block';
  }
}

function regua() {
    if (document.getElementById('regua1').checked) {
        document.getElementById('marcador-regua1').style.opacity = '1';
        document.getElementById('marcador-regua2').style.opacity = '0';
        document.getElementById('marcador-regua3').style.opacity = '0';
        document.getElementById('marcador-regua4').style.opacity = '0';
        document.getElementById('marcador-regua5').style.opacity = '0';
    }
    else if(document.getElementById('regua2').checked) {
        document.getElementById('marcador-regua1').style.opacity = '0';
        document.getElementById('marcador-regua2').style.opacity = '1';
        document.getElementById('marcador-regua3').style.opacity = '0';
        document.getElementById('marcador-regua4').style.opacity = '0';
        document.getElementById('marcador-regua5').style.opacity = '0';
   }
   else if(document.getElementById('regua3').checked) {
       document.getElementById('marcador-regua1').style.opacity = '0';
       document.getElementById('marcador-regua2').style.opacity = '0';
       document.getElementById('marcador-regua3').style.opacity = '1';
       document.getElementById('marcador-regua4').style.opacity = '0';
       document.getElementById('marcador-regua5').style.opacity = '0';
  }
  else if(document.getElementById('regua4').checked) {
      document.getElementById('marcador-regua1').style.opacity = '0';
      document.getElementById('marcador-regua2').style.opacity = '0';
      document.getElementById('marcador-regua3').style.opacity = '0';
      document.getElementById('marcador-regua4').style.opacity = '1';
      document.getElementById('marcador-regua5').style.opacity = '0';
 }
 else if(document.getElementById('regua5').checked) {
     document.getElementById('marcador-regua1').style.opacity = '0';
     document.getElementById('marcador-regua2').style.opacity = '0';
     document.getElementById('marcador-regua3').style.opacity = '0';
     document.getElementById('marcador-regua4').style.opacity = '0';
     document.getElementById('marcador-regua5').style.opacity = '1';
}
}

//voltar ao topo
let BTNDownload = document.getElementById("BaixarCV");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    BTNDownload.style.opacity = "1";
  } else {
    BTNDownload.style.opacity = "0";
  }
}