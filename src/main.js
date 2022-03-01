import data from './data/ghibli/ghibli.js';
import { filterData, sortData } from './data.js';
import { ORDER_ASCENDENTE } from './data.js';
import { ORDER_DESCENDENTE } from './data.js';

const arrayFilms = data.films;
const buttonAccess = document.getElementById("buttonAccess");
buttonAccess.addEventListener("click", showPage);

function showPage() {
  document.getElementById("contentPageOne").style.display = "none";
  document.getElementById("greetingPageOne").style.display = "block";
  let inputName = document.getElementById("userInput").value;
  document.getElementById("userName").innerText = inputName;
  setTimeout(showPage2, 1000);
}
function showPage2() {
  document.getElementById("pageOne").style.display = "none";
  document.getElementById("pageTwo").style.display = "block";
  showFilms(arrayFilms);
}

function showFilms(dataToPrint){
  const filmsDiv = document.getElementById("contentPageTwo");
  let allFilms='';

  for (let i=0;i< dataToPrint.length ; i++){
    let filmDiv = '<div>'
    filmDiv = filmDiv + '<img src="'+ readPropertyFromFilm(dataToPrint[i], "poster") + '">';
    filmDiv = filmDiv + '<h2>'
    filmDiv = filmDiv + readPropertyFromFilm(dataToPrint[i], "title") +'<br>';  
    filmDiv = filmDiv + '</h2>'
    filmDiv = filmDiv + '<h4>'
    filmDiv = filmDiv + readPropertyFromFilm(dataToPrint[i], "director") +'<br>';
    filmDiv = filmDiv + readPropertyFromFilm(dataToPrint[i], "producer")+'<br>'; 
    filmDiv = filmDiv + readPropertyFromFilm(dataToPrint[i], "release_date") +'<br>';
    filmDiv = filmDiv + '</h4>'
    filmDiv = filmDiv + '</div>'
    allFilms = filmDiv + allFilms
  }
  filmsDiv.innerHTML = allFilms;
}

function filterDataByMovieTitleAsc(){
  let orderData = sortData(data.films, "title", ORDER_ASCENDENTE);

  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";

  //pintar los objetos ya ordenados
  showFilms(orderData);
}

function sortDataByMovieProducerAsc(){
  let orderData = sortData(data.films, "producer", ORDER_ASCENDENTE);

  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";

  //pintar los objetos ya ordenados
  showFilms(orderData);
}

function sortDataByMovieProducerDes(){
  let orderData = sortData(data.films, "producer", ORDER_DESCENDENTE);

  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";

  //pintar los objetos ya ordenados
  showFilms(orderData);
}

let buttonFilterByMovieTitleAsc = document.getElementById("filterDataByMovieTitleAsc");
buttonFilterByMovieTitleAsc.addEventListener("click",filterDataByMovieTitleAsc)

let buttonSorByMovieProducerAsc = document.getElementById("sortDataByMovieProducerAsc");
buttonSorByMovieProducerAsc.addEventListener("click",sortDataByMovieProducerAsc)

let buttonSorByMovieProducerDes = document.getElementById("sortDataByMovieProducerDes");
buttonSorByMovieProducerDes.addEventListener("click",sortDataByMovieProducerDes)


//para ordenar las peliculas por año
function filterDataByYearAsc(){
  const orderData = sortData(data.films, "release_date", ORDER_ASCENDENTE);
  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //pintar los objetos ya ordenados
  showFilmsByYear(orderData);
}

function filterDataByYearDes(){
  const orderData = sortData(data.films, "release_date", ORDER_DESCENDENTE);
  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //pintar los objetos ya ordenados
  showFilmsByYear(orderData);
}
const buttonFilterByYearAsc = document.getElementById("filterDataByYearAsc");
buttonFilterByYearAsc.addEventListener("click",filterDataByYearAsc)

const buttonFilterByYearDes = document.getElementById("filterDataByYearDes");
buttonFilterByYearDes.addEventListener("click",filterDataByYearDes)

function showFilmsByYear(dataToPrint){
  const filmsDiv = document.getElementById("contentPageTwo");
  let allFilms='';

  for (let i=0; i< dataToPrint.length ; i++){
    let filmDiv = '<div>'
    filmDiv = filmDiv + '<img src="'+ readPropertyFromFilm(dataToPrint[i], "poster") + '">';
    filmDiv = filmDiv + '<h3>'
    filmDiv = filmDiv + readPropertyFromFilm(dataToPrint[i], "title") +'<br>'; 
    filmDiv = filmDiv + '</h3>'
    filmDiv = filmDiv + '<h1>'
    filmDiv = filmDiv + readPropertyFromFilm(dataToPrint[i], "release_date") +'<br>';
    filmDiv = filmDiv + '</h1>'
    filmDiv = filmDiv + '</div>'
    allFilms = filmDiv + allFilms
  }
  filmsDiv.innerHTML = allFilms;
}


const  imgDiv = document.getElementById('buttonSearch')
imgDiv.addEventListener('click',function (){
  const textFilter = document.getElementById("seekerInput").value; 
  const filmsFiltered = filterData(arrayFilms,textFilter);
  showFilms(filmsFiltered);
})


/*function computeStats (){

}*/
