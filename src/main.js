import data from './data/ghibli/ghibli.js';
import { filterData, sortData } from './data.js';
import { ORDER_ASCENDENTE } from './data.js';

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
    filmDiv = filmDiv + '<img src="'+ filterData(dataToPrint[i], "poster") + '">';
    filmDiv = filmDiv + '<h2>'
    filmDiv = filmDiv + filterData(dataToPrint[i], "title") +'<br>';  
    filmDiv = filmDiv + '</h2>'
    filmDiv = filmDiv + '<h4>'
    filmDiv = filmDiv + filterData(dataToPrint[i], "director") +'<br>';
    filmDiv = filmDiv + filterData(dataToPrint[i], "producer")+'<br>'; 
    filmDiv = filmDiv + filterData(dataToPrint[i], "release_date") +'<br>';
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

let buttonFilterByMovieTitleAsc = document.getElementById("filterDataByMovieTitleAsc");
buttonFilterByMovieTitleAsc.addEventListener("click",filterDataByMovieTitleAsc)