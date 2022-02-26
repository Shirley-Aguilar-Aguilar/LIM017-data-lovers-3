//import { filterData, sortData, computeStats } from './data.js';
import data from './data/ghibli/ghibli.js';

const arrayFilms = data.films;

const buttonAccess = document.getElementById("buttonAccess");
buttonAccess.addEventListener("click", showPage);

function showPage() {
  document.getElementById("contentPageOne").style.display = "none";
  document.getElementById("greetingPageOne").style.display = "block";
  let inputName = document.getElementById("userInput").value;
  document.getElementById("userName").innerText = inputName;
  setTimeout(showPage2, 3000);
}
function showPage2() {
  document.getElementById("pageOne").style.display = "none";
  document.getElementById("pageTwo").style.display = "block";
  showFilms();
}

function showFilms(){
  const filmsDiv = document.getElementById("contentPageTwo");
  let allFilms='';
  for (let i=0;i< arrayFilms.length ; i++){
    let filmDiv = '<div>'

    filmDiv = filmDiv + '<img src="'+ arrayFilms[i].poster +'">'
    filmDiv = filmDiv + '<h2>'
    filmDiv = filmDiv + arrayFilms[i].title;
    filmDiv = filmDiv + '</h2>'
    filmDiv = filmDiv + '</div>'

    allFilms = filmDiv + allFilms
  }
  filmsDiv.innerHTML = allFilms;
}
