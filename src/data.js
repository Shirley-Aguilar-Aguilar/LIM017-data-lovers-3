
export const filterData = (data,condition) => {
    return data[condition]
  // return '';  data= datos sin orden  sortBy= con respecto a cual de los datos se va a ordenar  sortorder= forma de orden(ascendete, descendente, alfabeticamente)
};
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




