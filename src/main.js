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

    filmDiv = filmDiv + '<img src="'+ dataToPrint[i].poster +'">'
    filmDiv = filmDiv + '<h2>'
    filmDiv = filmDiv + dataToPrint[i].title +'<br>';
    filmDiv = filmDiv + '</h2>'
    filmDiv = filmDiv + '<h4>'
    filmDiv = filmDiv + dataToPrint[i].director +'<br>';
    filmDiv = filmDiv + dataToPrint[i].producer +'<br>'; 
    filmDiv = filmDiv + dataToPrint[i].release_date +'<br>';
    filmDiv = filmDiv + '</h4>'
    filmDiv = filmDiv + '</div>'

    allFilms = filmDiv + allFilms
  }
  filmsDiv.innerHTML = allFilms;
}

function filterDataByMovieTitleAsc(){
  
  //console.log("datadata : " + data);

  let stringdata = JSON.stringify(data);
  //console.log("datadata stringdata : " + stringdata);

  let stringdataParse = JSON.parse(stringdata);

 // console.log("datadata stringdataParse : " + stringdataParse);
  
  //console.log("filterDataByMovieTitleAsc : " + stringdataParse.films.sort(GetSortOrder("title")));
  var orden = stringdataParse.films.sort(GetSortOrder("title"));
  console.log("orden : " + orden);

 //limpiar
  const filmsDiv = document.getElementById("contentPageTwo");
  filmsDiv.innerHTML = "";
  //return stringdataParse.films.sort(GetSortOrder("title"));

  //pintar
  showFilms(orden);
  /* let allFilms="";
  for (let i=0;i< orden.length ; i++){
    console.log("--> orden[i].title : " + orden[i].title);

    let filmDiv = ' <div>'

    filmDiv = filmDiv + '<img src="'+ orden[i].poster +'">'
    filmDiv = filmDiv + '<h2>'
    filmDiv = filmDiv + orden[i].title +'<br>';
    filmDiv = filmDiv + '</h2>'
    filmDiv = filmDiv + '<h4>'
    filmDiv = filmDiv + orden[i].director +'<br>';
    filmDiv = filmDiv + orden[i].producer +'<br>'; 
    filmDiv = filmDiv + orden[i].release_date +'<br>';
    filmDiv = filmDiv + '</h4>'
    filmDiv = filmDiv + '</div>'

    allFilms = filmDiv + allFilms
  }
 

  filmsDiv.innerHTML = allFilms; */


}

function GetSortOrder(prop) {    
  return function(a, b) {    
      if (a[prop] > b[prop]) {    
          return 1;    
      } else if (a[prop] < b[prop]) {    
          return -1;    
      }    
      return 0;    
  }    
} 


let buttonFilterByMovieTitleAsc = document.getElementById("filterDataByMovieTitleAsc");
buttonFilterByMovieTitleAsc.addEventListener("click",filterDataByMovieTitleAsc)