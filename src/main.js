//import { filterData /*sortData, computeStats*/ } from './data.js';
//import films from './data/ghibli/ghibli.js';

const buttonAccess = document.getElementById("buttonAccess");
buttonAccess.addEventListener("click", showPage);

function showPage(){
    document.getElementById("contentPageOne").style.display="none";
    document.getElementById("greetingPageOne").style.display="block";
    let inputName = document.getElementById("userInput").value;
    document.getElementById("userName").innerText = inputName ;
    setTimeout(showPage2, 2000);
}
function showPage2(){
    document.getElementById("pageOne").style.display="none";
    document.getElementById("pageTwo").style.display="block";
   
  
}
 






//AVANCE 
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
