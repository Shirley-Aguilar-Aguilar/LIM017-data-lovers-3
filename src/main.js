import data from './data/ghibli/ghibli.js';
import { filterData, sortData, computeStats, ORDER_ASCENDENTE, ORDER_DESCENDENTE } from './data.js';

const arrayFilms = data.films;
/*flecha para volver a historia 2*/
const arrowBack = document.getElementById("arrowBack");



//CARRUSEL
const accesPage1 = document.getElementById('buttonContinuar');
accesPage1.addEventListener("click",hideCarrusel);
function  hideCarrusel (){
  document.getElementById("carrusel-container").style.display = "none";
  showPageOne();
}
function showPageOne(){
  document.getElementById("pageOne").style.display = "block";
}



//PRIMERA HISTORIA
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
  /*volver a historia 2*/
  arrowBack.addEventListener("click", () => {
    const filmsDiv = document.getElementById("contentPageTwo");
    filmsDiv.innerHTML = "";
    arrowBack.style.display = "none";
    /*historia 2*/
    showFilms(arrayFilms);
    /*mostrar historia 3*/
    const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
    showPage3(filmsDisplay, arrayFilms);
  });
}
//Mostrar peliculas: Sin orden
function showFilms(dataToPrint) {
  const filmsDiv = document.getElementById("contentPageTwo");
  let filmDiv = '';
  dataToPrint.forEach(e => {
    filmDiv += `<div id="film${[e.id]}">
                   <img src="${e.poster}">
                   <h2> ${e.title}</h2>
                   <h4>
                   <p>Director: ${e.director}</p>
                   <p>Productor: ${e.producer}</p>
                   <p>${e.release_date}<p>
                   </h4>
                   </div>`;
  });
  filmsDiv.innerHTML = filmDiv;
  return filmsDiv;
}

//Peliculas por TITULO
let buttonFilterByMovieTitleAsc = document.getElementById("filterDataByMovieTitleAsc");
buttonFilterByMovieTitleAsc.addEventListener("click", filterDataByMovieTitleAsc); //llama a las films ordenados A-Z

function filterDataByMovieTitleAsc() {
  let orderData = sortData(data.films, "title", ORDER_ASCENDENTE);
  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  hideMenuNav();
  //pintar los objetos ya ordenados
  showFilms(orderData);
  /*mostrar historia 3*/
  const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
  showPage3(filmsDisplay, orderData)
  //flecha para vlver a peliculas ascendente
  arrowBack.addEventListener("click", () => {
    const filmsDiv = document.getElementById("contentPageTwo");
    filmsDiv.innerHTML = "";
    arrowBack.style.display = "none";
    filterDataByMovieTitleAsc()
  });
}

let buttonFilterByMovieTitleDesc = document.getElementById("filterDataByMovieTitleDesc");
buttonFilterByMovieTitleDesc.addEventListener("click", filterDataByMovieTitleDesc); //llama a las films ordenados Z-A

function filterDataByMovieTitleDesc() {
  let orderData = sortData(data.films, "title", ORDER_DESCENDENTE);
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  hideMenuNav();
  showFilms(orderData);
  /*mostrar historia 3*/
  const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
  showPage3(filmsDisplay, orderData)
  //flecha para peliculas descendente
  arrowBack.addEventListener("click", () => {
    const filmsDiv = document.getElementById("contentPageTwo");
    filmsDiv.innerHTML = "";
    arrowBack.style.display = "none";
    filterDataByMovieTitleDesc()
  });
}

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
    let filmDiv = `<article id="director${[i]}">
                   <img src="${dataToPrint[i].posterDirector}">
                   <h2>${dataToPrint[i].director}</h2>
                   </article>`
    allFilms += filmDiv
  }
  filmsDiv.innerHTML = allFilms;
}

//Ordena las peliculas por PRODUCTORES
let buttonSorByMovieProducerAsc = document.getElementById("sortDataByMovieProducerAsc");
buttonSorByMovieProducerAsc.addEventListener("click", sortDataByMovieProducerAsc); // ordena A-Z

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

let buttonSorByMovieProducerDes = document.getElementById("sortDataByMovieProducerDes");
buttonSorByMovieProducerDes.addEventListener("click", sortDataByMovieProducerDes);

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

//Muestra los productores
function showFilmsByProducer(dataToPrint) {
  const producersDiv = document.getElementById("contentPageTwo");
  let producerDiv = "";
  dataToPrint.forEach(e => {
    producerDiv += `<article id="producer${[e.id]}">
                     <img src="${e.posterProducer}">
                     <h2> ${e.producer}</h2>
                     </article>`;
  });
  producersDiv.innerHTML = producerDiv;
  return producersDiv;
}

//para ordenar las peliculas por año
const buttonFilterByYearAsc = document.getElementById("filterDataByYearAsc");
buttonFilterByYearAsc.addEventListener("click", filterDataByYearAsc);

function filterDataByYearAsc() {
  const orderData = sortData(data.films, "release_date", ORDER_ASCENDENTE);
  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //pintar los objetos ya ordenados
  hideMenuNav();
  showFilmsByYear(orderData);
  /*Historia 3*/
  const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
  showPage3(filmsDisplay, orderData)
  //flecha para peliculas ascendente
  arrowBack.addEventListener("click", () => {
    const filmsDiv = document.getElementById("contentPageTwo");
    filmsDiv.innerHTML = "";
    arrowBack.style.display = "none";
    filterDataByYearAsc()
  });
}

const buttonFilterByYearDes = document.getElementById("filterDataByYearDes");
buttonFilterByYearDes.addEventListener("click", filterDataByYearDes);

function filterDataByYearDes() {
  const orderData = sortData(data.films, "release_date", ORDER_DESCENDENTE);
  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //pintar los objetos ya ordenados
  hideMenuNav();
  showFilmsByYear(orderData);
  /*Historia 3*/
  const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
  showPage3(filmsDisplay, orderData)
  //flecha para peliculas ascendente
  arrowBack.addEventListener("click", () => {
    const filmsDiv = document.getElementById("contentPageTwo");
    filmsDiv.innerHTML = "";
    arrowBack.style.display = "none";
    filterDataByYearDes()
  });
}

function showFilmsByYear(dataToPrint) {
  const filmsDiv = document.getElementById("contentPageTwo");
  let filmDiv = '';
  dataToPrint.forEach(e => {
    filmDiv += `<div id="film${[e.id]}">
                     <img src="${e.poster}">
                     <h2> ${e.title}</h2>
                     <h1>
                     <p>${e.release_date}<p>
                     </h1>
                     </div>`;
  });
  filmsDiv.innerHTML = filmDiv;
  return filmsDiv;
}
//BUSCADOR
/*que busque al dar enter*/
const elem = document.getElementById('seekerInput');
elem.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const textFilter = document.getElementById("seekerInput").value;
    const filmsFiltered = filterData(arrayFilms, textFilter);
    showFilms(filmsFiltered);
    /*mostrar historia 3*/
    const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
    showPage3(filmsDisplay, filmsFiltered);
    /*volver a historia 2*/
    arrowBack.addEventListener("click", () => {
      const filmsDiv = document.getElementById("contentPageTwo");
      filmsDiv.innerHTML = "";
      arrowBack.style.display = "none";
      showFilms(filmsFiltered);
      const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
      showPage3(filmsDisplay, filmsFiltered);
    });
  }
});
/*para que la busqueda se de mientras se escribe*/
elem.addEventListener("keyup", function () {
  const textFilter = document.getElementById("seekerInput").value;
  const filmsFiltered = filterData(arrayFilms, textFilter);
  showFilms(filmsFiltered);
  /*mostrar historia 3*/
  const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
  showPage3(filmsDisplay, filmsFiltered);
  /*volver a historia 2*/
  arrowBack.addEventListener("click", () => {
    const filmsDiv = document.getElementById("contentPageTwo");
    filmsDiv.innerHTML = "";
    arrowBack.style.display = "none";
    showFilms(filmsFiltered);
    const filmsDisplay = document.querySelectorAll(`div[id^="film"]`);
    showPage3(filmsDisplay, filmsFiltered);
  });
});

//ocultar menu de navegador
let clickLabelCheck = document.getElementById("labelCheck");
clickLabelCheck.addEventListener("click", hideMenuNav);

function hideMenuNav() {
  let navegadorMenu = document.getElementById("navMenu")
  navegadorMenu.classList.add('hideMenu')
}
// mostrar menu de navegador
let clickLabelShow = document.getElementById("checkLabelShow");
clickLabelShow.addEventListener("click", showMenuNav);

function showMenuNav() {
  let navegadorMenu = document.getElementById("navMenu")
  navegadorMenu.classList.remove('hideMenu')
}

/*mostrar historia 3*/
function showPage3(filmsDisplay, array) {
  const filmsDiv = document.getElementById("contentPageTwo");
  let filmInfo = '';

  for (let i = 0; i < filmsDisplay.length; i++) {
    filmsDisplay[i].addEventListener('click', () => {

      for (let j = 0; j < array.length; j++) {
        if (i == j) {
          let filmDiv = `<div id="storyThree" style="width:70%;align-items: center;text-align: left;display: flex;flex-direction:column">
                         <h1> ${array[j].title}</h1><br><br>
                         <img src="${array[j].poster}"><br>
                         <h3>
                         <p>Director: ${array[j].director}</p><br>
                         <p>Productor: ${array[j].producer}</p><br>
                         <p>Release date: ${array[j].release_date}<p><br>
                         <p>Description:${array[j].description}<p>
                         </h3>
                         </div>`;
          filmInfo = filmDiv
        }
        filmsDiv.innerHTML = filmInfo
        arrowBack.style.display = "";
      }
    });
  }
}


function computeTotalNumberOfSpecie(specie) {
  //limpiar el div contentPageTwo
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //contador
  let numberOfSpecie = computeStats(arrayFilms, specie);
  hideMenuNav();
  showFilmsDataPeople(numberOfSpecie);
}

function computeTotalNumberOfHuman() {
  computeTotalNumberOfSpecie("Human");
}
function computeTotalNumberOfCats() {
  computeTotalNumberOfSpecie("Cat");
  document.getElementById("imageCats");
}
function computeTotalNumberOfTotoro() {
  computeTotalNumberOfSpecie("Totoro");
}
function computeTotalNumberOfWitch() {
  computeTotalNumberOfSpecie("Witch");
}

function computeTotalNumberOfRaccon() {
  computeTotalNumberOfSpecie("Raccoon Dog");
}
function computeTotalNumberOfRedelk() {
  computeTotalNumberOfSpecie("Red elk");
}
function computeTotalNumberOfSpirit() {
  computeTotalNumberOfSpecie("Spirit");
}
function computeTotalNumberOfWolf() {
  computeTotalNumberOfSpecie("Wolf");

}

//mostrando conteo-------
function showFilmsDataPeople(dataToPrint) {
  let allFilms = "";
  const FILMS_DIV = document.getElementById("contentPageTwo");
  let filmDiv = `<aside id="counterOfPeople">
                 <h1><strong>En esta web del Studio Ghibli, <br> la cantidad de este personaje es : ${dataToPrint} </strong></h1><br>
                 <img src="img/people.jpg"><br><br>
                 </aside>`
  allFilms = filmDiv;
  FILMS_DIV.innerHTML = allFilms;
}
// evento de compute stats

const buttonFilterDataByHuman = document.getElementById("filterDataByHuman");
buttonFilterDataByHuman.addEventListener("click", computeTotalNumberOfHuman);

const buttonFilterDataByCats = document.getElementById("filterDataByCats");
buttonFilterDataByCats.addEventListener("click", computeTotalNumberOfCats);

const buttonFilterDataByTotoro = document.getElementById("filterDataByTotoros");
buttonFilterDataByTotoro.addEventListener("click", computeTotalNumberOfTotoro);

const buttonFilterDataByWitch = document.getElementById("filterDataByWitch");
buttonFilterDataByWitch.addEventListener("click", computeTotalNumberOfWitch);

const buttonFilterDataByRaccon = document.getElementById("filterDataByRaccon");
buttonFilterDataByRaccon.addEventListener("click", computeTotalNumberOfRaccon);

const buttonFilterDataByRedelk = document.getElementById("filterDataByRedelk");
buttonFilterDataByRedelk.addEventListener("click", computeTotalNumberOfRedelk);

const buttonFilterDataBySpirit = document.getElementById("filterDataBySpirit");
buttonFilterDataBySpirit.addEventListener("click", computeTotalNumberOfSpirit);

const buttonFilterDataByWolf = document.getElementById("filterDataByWolf");
buttonFilterDataByWolf.addEventListener("click", computeTotalNumberOfWolf);



// carrusel
let indexUl = document.querySelector(".imgdiv ul");
//etiqueta li
let  indexLi=indexUl.querySelectorAll("li");
let  lengthLi =indexLi.length;
//el div más grande
let pop = document.querySelector(".imgdiv");
let lfspan=pop.querySelector('.lf');
let rfspan=pop.querySelector('.rf');
//Establecer los botones izquierdo y derecho al centro
// lfspan.style.top=(parseInt(pop.offsetHeight)-60)/2+'px';
// rfspan.style.top=(parseInt(pop.offsetHeight)-60)/2+'px';
//Inicializar para obtener el ancho del marco de visualización
let content_width=parseInt(pop.offsetWidth);
//
const TIME=2000;
let timer;
//
//Configura el acumulador global para determinar qué imagen mover ****************
let num=0;
//Sigue el número de imágenes, establece dinámicamente el número de puntos
let newsbigdiv=document.createElement('div');
newsbigdiv.className='navigators';
pop.appendChild(newsbigdiv);
//Crea subdivs en un bucle, da a cada subdiv un estilo de clase y agrega un índice
for(var i=0;i<lengthLi;i++){
  let  newsdiv=document.createElement('div');
  newsbigdiv.appendChild(newsdiv);
  newsdiv.className="newsdiv";
  newsdiv.setAttribute('index',i);//Establecer un valor de índice para cada subdiv.
}
//Obtenga el número de divisiones de puntos, desplace hacia la izquierda y muéstrelo en el centro
let divsv = newsbigdiv.querySelectorAll('div');
//El primero está resaltado por defecto
divsv[0].style.opacity=1;
//
//
function change(){
  //Establece toda la transparencia de estilo de punto en 0.3
  for(let j=0;j<lengthLi;j++){
    divsv[j].style.opacity=0.3;
  }
  //Cambia el resaltado de puntos a la imagen con el índice actual como num
  divsv[num].style.opacity=1;
  indexUl.style.left=-num*100+'%';
  //indexUl.classList.add('slide-1')
}
//
for(let i=0;i<lengthLi;i++){
  divsv[i].onclick=function(){
    num=this.getAttribute('index');
    change();
  }
}
lfspan.onclick=function(){
  num--;
  if(num==-1){
    num=lengthLi-1;
  }
  change();
}
rfspan.onclick=function(){
  num++;
  if(num==lengthLi){
    num=0;
  }
  change();
}
//
timer=setInterval(rfspan.onclick,TIME);
//
//Borra el temporizador cuando el mouse esté sobre la imagen
pop.onmouseover=function(){
  clearInterval(timer);
}
//Inicia el temporizador cuando el mouse sale del temporizador
pop.onmouseout=function(){
  timer=setInterval(rfspan.onclick,TIME);
}
