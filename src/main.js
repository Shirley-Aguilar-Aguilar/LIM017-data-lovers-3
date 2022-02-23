//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const buttonAccess = document.getElementById("buttonAccess");
buttonAccess.addEventListener("click", showPage);

function showPage(){
    document.getElementById("contentPageOne").style.display="none";
    document.getElementById("greetingPageOne").style.display="block";
    let inputName = document.getElementById("userInput").value;
    document.getElementById("userName").innerText = inputName ;
    setTimeout(showPage2, 4000);
}
function showPage2(){
    document.getElementById("pageOne").style.display="none";
    document.getElementById("pageTwo").style.display="block";
}

/*function obtenerHtmlListado(){

  const filmsDiv = document.getElementById('listadoPeliculas')
  let conjuntoFilms=''

  for (let i=0;i< peliculasAMostrar.length ; i++){
    let peliculaDiv = '<div>'

    peliculaDiv = peliculaDiv + '<img src="'+ peliculasAMostrar[i].poster +'">'
    peliculaDiv = peliculaDiv + '<h2>'
    peliculaDiv = peliculaDiv + data.films[i].title;
    peliculaDiv = peliculaDiv + '</h2>'
    peliculaDiv = peliculaDiv + '</div>'

    conjuntoFilms = peliculaDiv + conjuntoFilms
  }
  filmsDiv.innerHTML = conjuntoFilms;

console.log(conjuntoFilms);
}

console.log( data.films);*/
