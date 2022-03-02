import data from './data/ghibli/ghibli.js';
import { filterData, sortData } from './data.js';
import { ORDER_ASCENDENTE, ORDER_DESCENDENTE } from './data.js';

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
  /*mostrar historia 3*/
  const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
  showPage3(filmsDisplay, arrayFilms);
}


function showFilms(dataToPrint) {
  const filmsDiv = document.getElementById("contentPageTwo");
  let allFilms = '';

  for (let i = 0; i < dataToPrint.length; i++) {
    let filmDiv = `<div id="film${[i]}">`
    filmDiv = filmDiv + '<img src="' + readPropertyFromFilm(dataToPrint[i], "poster") + '">';
    filmDiv = filmDiv + '<h2>'
    filmDiv = filmDiv + readPropertyFromFilm(dataToPrint[i], "title") + '<br>';
    filmDiv = filmDiv + '</h2>'
    filmDiv = filmDiv + '<h4>'
    filmDiv = filmDiv + '<p>Director: ' + readPropertyFromFilm(dataToPrint[i], "director") + '</p>';
    filmDiv = filmDiv + '<p>Productor: ' + readPropertyFromFilm(dataToPrint[i], "producer") + '</p>';
    filmDiv = filmDiv + readPropertyFromFilm(dataToPrint[i], "release_date") + '<br>';
    filmDiv = filmDiv + '</h4>'
    filmDiv = filmDiv + '</div>'
    allFilms = filmDiv + allFilms
  }
  filmsDiv.innerHTML = allFilms;
}

//manejo del DOM
function readPropertyFromFilm(data, property) {
  return data[property]
}

function filterDataByMovieTitleAsc() {
  let orderData = sortData(data.films, "title", ORDER_ASCENDENTE);

  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
 hideMenuNav();
  //pintar los objetos ya ordenados
  showFilms(orderData);
}

let buttonFilterByMovieTitleAsc = document.getElementById("filterDataByMovieTitleAsc");
buttonFilterByMovieTitleAsc.addEventListener("click", filterDataByMovieTitleAsc);

function filterDataByMovieTitleDesc() {
  let orderData = sortData(data.films, "title", ORDER_DESCENDENTE);
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  hideMenuNav();
  showFilms(orderData);
}
let buttonFilterByMovieTitleDesc = document.getElementById("filterDataByMovieTitleDesc");
buttonFilterByMovieTitleDesc.addEventListener("click", filterDataByMovieTitleDesc);


//EVENTOS PARA DIRECTORES
//----------evento ascendente-----------
let buttonFilterByMovieDirectorAsc = document.getElementById("filterDataByMovieDirectorAsc");
buttonFilterByMovieDirectorAsc.addEventListener("click", filterDataByMovieDirectorAsc);

function filterDataByMovieDirectorAsc() {
  let orderData = sortData(data.films, "director", ORDER_ASCENDENTE);
  const onlyDirectors = [];
  orderData.forEach(p => {
    if (onlyDirectors.findIndex(pd => pd.director === p.director) === -1) {
      // No existe; al detectar que no existe el mismo nombre, "la copiamos"
      onlyDirectors.push(p);
    }
  });
  //limpiar
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //mostrar directores
  hideMenuNav();
  showFilmsDirector(onlyDirectors);
}

//----------evento descendente-----------
let buttonFilterByMovieDirectorDesc = document.getElementById("filterDataByMovieDirectorDesc");
buttonFilterByMovieDirectorDesc.addEventListener("click", filterDataByMovieDirectorDesc);

function filterDataByMovieDirectorDesc() {
  let orderData = sortData(data.films, "director", ORDER_DESCENDENTE);
  const onlyDirectors = [];
  orderData.forEach(p => {
    if (onlyDirectors.findIndex(pd => pd.director === p.director) === -1) {
      // No existe; al detectar que no existe el mismo nombre, "la copiamos"
      onlyDirectors.push(p);
    }
  });
  //limpiar
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //mostrar directores
   hideMenuNav();
  showFilmsDirector(onlyDirectors);
}

//MOSTRAR DIRECTORES
function showFilmsDirector(dataToPrint) {
  const filmsDiv = document.getElementById("contentPageTwo");
  let allFilms = '';

  for (let i = 0; i < dataToPrint.length; i++) {
    let filmDiv = `<article id="director${[i]}">`
    filmDiv = filmDiv + '<img src="' + readPropertyFromFilm(dataToPrint[i], "posterDirector") + '">';
    filmDiv = filmDiv + '<h2>'
    filmDiv = filmDiv + readPropertyFromFilm(dataToPrint[i], "director") + '<br>';
    filmDiv = filmDiv + '</h2>'
    filmDiv = filmDiv + '</article>'
    allFilms = filmDiv + allFilms
  }
  filmsDiv.innerHTML = allFilms;
}
function sortDataByMovieProducerAsc() {
  let orderData = sortData(data.films, "producer", ORDER_ASCENDENTE);
  const onlyProducers = [];
  orderData.forEach(p => {
    if (onlyProducers.findIndex(pd => pd.producer === p.producer) === -1) {
      // No existe; al detectar que no existe el mismo nombre, "la copiamos"
      onlyProducers.push(p);
    }
  });

  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";

  //pintar los objetos ya ordenados
  hideMenuNav();
  showFilmsByProducer(onlyProducers);
}

function sortDataByMovieProducerDes() {
  let orderData = sortData(data.films, "producer", ORDER_DESCENDENTE);
  const onlyProducersDesc = [];
  orderData.forEach(p => {
    if (onlyProducersDesc.findIndex(pd => pd.producer === p.producer) === -1) {
      // No existe; al detectar que no existe el mismo nombre, "la copiamos"
      onlyProducersDesc.push(p);
    }
  });
  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";

  //pintar los objetos ya ordenados
  hideMenuNav();
  showFilmsByProducer(onlyProducersDesc);
}

let buttonSorByMovieProducerAsc = document.getElementById("sortDataByMovieProducerAsc");
buttonSorByMovieProducerAsc.addEventListener("click", sortDataByMovieProducerAsc)

let buttonSorByMovieProducerDes = document.getElementById("sortDataByMovieProducerDes");
buttonSorByMovieProducerDes.addEventListener("click", sortDataByMovieProducerDes)


//para ordenar las peliculas por año
function filterDataByYearAsc() {
  const orderData = sortData(data.films, "release_date", ORDER_ASCENDENTE);
  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //pintar los objetos ya ordenados
  hideMenuNav();
  showFilmsByYear(orderData);
}

function filterDataByYearDes() {
  const orderData = sortData(data.films, "release_date", ORDER_DESCENDENTE);
  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //pintar los objetos ya ordenados
  hideMenuNav();
  showFilmsByYear(orderData);
}
const buttonFilterByYearAsc = document.getElementById("filterDataByYearAsc");
buttonFilterByYearAsc.addEventListener("click", filterDataByYearAsc)

const buttonFilterByYearDes = document.getElementById("filterDataByYearDes");
buttonFilterByYearDes.addEventListener("click", filterDataByYearDes)


function showFilmsByProducer(dataToPrint) {
  const filmsDiv = document.getElementById("contentPageTwo");
  let allFilms = '';

  for (let i = 0; i < dataToPrint.length; i++) {
    let filmDiv = `<article id="filmByProducer${[i]}">`
    filmDiv = filmDiv + '<img src="' + readPropertyFromFilm(dataToPrint[i], "posterProducer") + '">';
    filmDiv = filmDiv + '<h2>'
    filmDiv = filmDiv + readPropertyFromFilm(dataToPrint[i], "producer") + '<br>';
    filmDiv = filmDiv + '</h2>'
    filmDiv = filmDiv + '</article>'
    allFilms = filmDiv + allFilms
  }
  filmsDiv.innerHTML = allFilms;



}
function showFilmsByYear(dataToPrint) {
  const filmsDiv = document.getElementById("contentPageTwo");
  let allFilms = '';
  for (let i = 0; i < dataToPrint.length; i++) {
    let filmDiv = `<div id="film${[i]}">`
    filmDiv = filmDiv + '<img src="' + readPropertyFromFilm(dataToPrint[i], "poster") + '">';
    filmDiv = filmDiv + '<h3>'
    filmDiv = filmDiv + readPropertyFromFilm(dataToPrint[i], "title") + '<br>';
    filmDiv = filmDiv + '</h3>'
    filmDiv = filmDiv + '<h1>'
    filmDiv = filmDiv + readPropertyFromFilm(dataToPrint[i], "release_date") + '<br>';
    filmDiv = filmDiv + '</h1>'
    filmDiv = filmDiv + '</div>'
    allFilms = filmDiv + allFilms
  }
  filmsDiv.innerHTML = allFilms;
}


/*funcionalidad del boton*/
const imgDiv = document.getElementById('buttonSearch')
imgDiv.addEventListener('click', function () {
  const textFilter = document.getElementById("seekerInput").value;
  const filmsFiltered = filterData(arrayFilms, textFilter);
  showFilms(filmsFiltered);
})
/*que busque al dar enter*/
const elem = document.getElementById('seekerInput');
elem.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const textFilter = document.getElementById("seekerInput").value;
    const filmsFiltered = filterData(arrayFilms, textFilter);
    showFilms(filmsFiltered);
  }
});
/*para que la busqueda se de mientras se escribe*/
elem.addEventListener("keyup", function () {
  const textFilter = document.getElementById("seekerInput").value;
  const filmsFiltered = filterData(arrayFilms, textFilter);
  showFilms(filmsFiltered);
});
/*datos en minuscula
1ra letra a lower y 2da+ upper*/

//ocultar menu de navegador
let clickLabelCheck = document.getElementById("labelCheck");
clickLabelCheck.addEventListener("click",hideMenuNav);

function hideMenuNav(){
 let navegadorMenu = document.getElementById("navMenu")
  navegadorMenu.classList.add('hideMenu')

}
// mostrar menu de navegador
let clickLabelShow = document.getElementById("checkLabelShow");
clickLabelShow.addEventListener("click",showMenuNav);

function showMenuNav(){
  let navegadorMenu = document.getElementById("navMenu")
  navegadorMenu.classList.remove('hideMenu')

}


/*function computeStats (){
}*/


/*mostrar historia 3*/
function showPage3(filmsDisplay, arrayFilms) {
  const filmsDiv = document.getElementById("contentPageTwo");
  let allFilms = '';

  for (let i = 0; i < filmsDisplay.length; i++) {
    filmsDisplay[i].addEventListener('click', function filmInformation() {

      for (let y = 0; y < arrayFilms.length; y++) {
        if (i == y) {
          const j = Math.abs(y-19)
          let filmDiv = `<div style="display:block;text-align:justify;width:70%;">`
          filmDiv = filmDiv + '<img style="height:40vh;width:16vw;" src="' + arrayFilms[j].poster + '"><br><br>';
          filmDiv = filmDiv + '<h2>'
          filmDiv = filmDiv + arrayFilms[j].title + '<br> <br>';
          filmDiv = filmDiv + '</h2>'
          filmDiv = filmDiv + '<h4>'
          filmDiv = filmDiv + '<p>Director: ' + arrayFilms[j].director + '</p><br>';
          filmDiv = filmDiv + '<p>Productor: ' + arrayFilms[j].producer + '</p><br>';
          filmDiv = filmDiv + '</p>Release date: ' + arrayFilms[j].release_date + '</p><br>';
          filmDiv = filmDiv + '<p>Description: ' + arrayFilms[j].description + '</p>';
          filmDiv = filmDiv + '</h4>'
          filmDiv = filmDiv + '</div>'
          allFilms = filmDiv + allFilms
        }
        filmsDiv.innerHTML = allFilms;
        arrowBack.style.display= "";
      }
    });
  }
}
/*flecha para volver a historia 2*/
const arrowBack = document.getElementById("arrowBack");
arrowBack.addEventListener("click", ()=>{
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  arrowBack.style.display= "none";
  showPage2()
})
