export const filterData = (data,condition) => {
  return data.filter(film => film.title.includes(condition)|| film.director.includes(condition) || film.producer.includes(condition)|| film.release_date.includes(condition))    

  // return '';  data= datos sin orden  sortBy= con respecto a cual de los datos se va a ordenar  sortorder= forma de orden(ascendete, descendente, alfabeticamente)
};


// Defines lo que recibe, lo que hace y lo que devuelve
// recibe : recibe la data que es un objeto y condition que es una propiedad del objeto
//  hace:  está obteniendo la propiedad del objeto 
//devuelve: el elemento del objeto.propiedad ejemplo data.title : "HOLIS"


// Defines lo que debe recibir, lo que debe hacer, y lo que debe devolver
//recibir : debe recibir un arreglo con una condicion
//hacer: debe evaluar al arreglo y traer los elementos que cumplan tal condicion
<<<<<<< HEAD
//devolver: los elementos que cumplan la condicion
 
=======
//devolver: los elementos que cumplan la condicion 
>>>>>>> 2500c8760b7c77ef8512ffc35521ecb11c0eb3e6


export const sortData = (data, sortBy, sortOrder) => {
  // return '';  data= datos sin orden  sortBy= con respecto a cual de los datos se va a ordenar  sortorder= forma de orden(ascendete, descendente, alfabeticamente)
  let stringdata = JSON.stringify(data);
  let stringdataParse = JSON.parse(stringdata);
  //ordenando objetos por title
  if (sortOrder === ORDER_ASCENDENTE) {
    return stringdataParse.sort(getSortOrderAsc(sortBy));
  } else if (sortOrder === ORDER_DESCENDENTE){
    return stringdataParse.sort(getSortOrderDesc(sortBy));
  } else {
    console.log("error de configuración en la función sortData, sortOrder :" + sortOrder );
  }
};


export const ORDER_ASCENDENTE = "asc";
export const ORDER_DESCENDENTE = "des";

function getSortOrderAsc(prop) {    
  return function(a, b) {    
      if (a[prop] > b[prop]) {    
          return 1; 
      } else if (a[prop] < b[prop]) {    
          return -1;    
      }    
      return 0;    
  }    
} 

function getSortOrderDesc(prop) {    
  return function(a, b) {    
      if (a[prop] < b[prop]) {    
          return 1;    
      } else if (a[prop] > b[prop]) {    
          return -1;    
      }    
      return 0;    
  }    
} 

export const computeStats = (/*data*/) => {
  // return 'OMG'; data=datos sin orden   hace calculo en base a la data
};



//CONTENIDO SEGUN README

/*
FUNCIONES RECOMENDADAS
-filterData(data,condition)---filtra data---retorna datos solicitados
-sortData(data,sortBy, sortOrder)---ordena datos
-computeStats(data)---cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.()
*/




