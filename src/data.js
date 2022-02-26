// estas funciones son de ejemplo
//peliculas por titulo
export const sortDataTitles = (data, sortOrder) => {
  let sortBy;
  if (sortOrder === 'az') {
    sortBy = data.sort((a, b) => {
      if (a.title < b.title) { return -1; }
      if (a.title > b.title) { return 1; }
      return 0;
    });
  } else if (sortOrder === 'za') {
    sortBy = data.sort((a, b) => {
      if (a.title > b.title) { return -1; }
      if (a.title < b.title) { return 1; }
      return 0;
    });
  }
  sortBy.forEach((e) => { 
    console.log(`${e.title} ${e.director} ${e.producer} ${e.release_deate}`);
  });
  return sortBy;
};

//probando si se ven en el documento
//data.forEach((e) => {
// document.write(` <p>${e.title}</p> <p>${e.director}</p> <p>${e.age}</p>`);
// console.log(`${e.title} ${e.director} ${e.producer}`);});

//ordenar por directores
export const sortDataDirectors = (data, sortOrder) => {
  let sortBy;
  if (sortOrder === 'az') {
    sortBy = data.sort((a, b) => {
      if (a.director < b.director) { return -1; }
      if (a.director > b.director) { return 1; }
      return 0;
    });
  } else if (sortOrder === 'za') {
    sortBy = data.sort((a, b) => {
      if (a.director > b.director) { return -1; }
      if (a.director < b.director) { return 1; } 
      return 0;
    });
  } sortBy.forEach((e) => {
    console.log(`${e.director} ${e.title} ${e.producer} ${e.release_deate}`);
  });
  return sortBy;
}

//ordenar por productores
//ordenar por directores
export const sortDataDirectors = (data, sortOrder) => {
  let sortBy;
  if (sortOrder === 'az') {
    sortBy = data.sort((a, b) => {
      if (a.producer < b.producer) { return -1; }
      if (a.producer > b.producer) { return 1; }
      return 0;
    });
  } else if (sortOrder === 'za') {
    sortBy = data.sort((a, b) => {
      if (a.producer > b.producer) { return -1; }
      if (a.producer < b.producer) { return 1;} 
      return 0;
    });
  } sortBy.forEach((e) => {
    console.log(` ${e.producer} ${e.director} ${e.title} ${e.release_deate}`);
  });
  return sortBy;
}

//ordenar por fecha de streno
export const sortDataReleaseDate = (data, sortOrder) => {
  let sortBy;
  if (sortOrder === 'ascendente') {
    sortBy = data.sort((a, b) => {
      let da = new Date(a.release_date), //Date() Permite trabajar con fechas y horas.
        db = new Date(b.release_date);
      return da - db;
    });
  } if (sortOrder === 'descendente') {
    sortBy = data.sort((a, b) => {
      let da = new Date(a.release_date),
        db = new Date(b.release_date);
      return db - da;
    });
  }
  data.forEach((e) => {
    console.log(`${e.release_date} ${e.director} ${e.title}${e.release_deate}`);
  });
  return sortBy;
};


export const sortData = (/*data,sortBy, sortOrder*/) => {
  // return '';  data= datos sin orden  sortBy= con respecto a cual de los datos se va a ordenar  sortorder= forma de orden(ascendete, descendente, alfabeticamente)
};

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




