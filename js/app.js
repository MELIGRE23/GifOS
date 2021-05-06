var storageClass

function initTheme ( ) {
  var storageClass = localStorage.getItem ("className");
  if (storageClass) {
    changeTheme (storageClass);
  }
}
initTheme ();

function changeTheme (className) {
  const bodySelector = document.querySelector('#body');
  const logoLight = document.querySelector('#logoLight');
  const logoDark = document.querySelector('#logoDark');


  var contentSearchClass = document.getElementsByClassName('content-search');
  if (contentSearchClass.length > 0) {   
    document.getElementById('content-search').classList.add('hide');
  }

  var mySearch = document.getElementById("buscador");
    if(mySearch){
      document.getElementById ('listaOpciones').classList.add ('hide')
    }
   

  if (className == "dark") {
    bodySelector.classList.remove("light");
    /* MUESTRO EL LOGO DARK Y OCULTO DE LIGHT */
    logoDark.classList.remove("hide");
    logoLight.classList.add('hide')
  } else {
    bodySelector.classList.remove("dark");
    /* MUESTRO EL LOGO LIGHT Y OCULTO DE DARK */
    logoLight.classList.remove("hide");
    logoDark.classList.add('hide')
  }

  localStorage.setItem("className", className);
/* tema seleccionado se guarda en el storage*/ 
  document.querySelector('body').classList.add(className)
}


function deplegar (idDiv) {
  var listaOpciones = document.getElementById(idDiv)
  var className = listaOpciones.className
  if (className === 'hide') {
    listaOpciones.classList.remove("hide");
  } else {
    listaOpciones.classList.add('hide');
  }
}

function mostrarDiv (idDiv) {
  var listaOpciones = document.getElementById(idDiv)
  var idSearch = document.getElementById('input-search')
  var className = listaOpciones.className
  if  ( idSearch.value == '') {
    listaOpciones.classList.add("hide");
  } 
  if (className === 'hide' && idSearch.value !== '') {
    listaOpciones.classList.remove("hide");
  } 
}



