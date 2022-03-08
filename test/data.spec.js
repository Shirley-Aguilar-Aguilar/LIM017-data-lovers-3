import { filterData, sortData, computeStats } from '../src/data.js';
import data from '../src/data/ghibli/ghibli.js'; //'../ ./data/ghibli/ghibli.js';
import { ORDER_ASCENDENTE, ORDER_DESCENDENTE } from '../src/data.js';
//import { error } from "console";

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns `filterData by title`', () => {
    expect(filterData( data.films, "Castle")instanceof Array).toBe(true);
  });

  it('returns `filterData by director `', () => {
    expect(filterData(data.films, "director")instanceof Array).toBe(true);
  });

  it('returns `filterData by release date`', () => {
    expect(filterData(data.films,"release_date")instanceof Array).toBe(true);
  });
});



describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns `sortData by title ascendente`', () => {
    let sortedData = sortData(data.films, "title", ORDER_ASCENDENTE);
    for(let i = 0; i < sortedData.length - 1; i ++) {
      //error("i:  " + sortedData[i].title + ", i + 1: " + sortedData[i+1].title);
      expect(sortedData[i].title <= sortedData[i+1].title).toBe(true);
    }
  });

  it('returns `sortData by director descendente`', () => {
    let sortedData = sortData(data.films, "director", ORDER_DESCENDENTE);
    for(let i = 0; i < sortedData.length - 1; i ++) {
      //error("i:  " + sortedData[i].title + ", i + 1: " + sortedData[i+1].title);
      expect(sortedData[i].director >= sortedData[i+1].director).toBe(true);
    }
  });

  it('returns `sortData by producer descendente`', () => {
    let sortedData = sortData(data.films, "producer", ORDER_DESCENDENTE);
    for(let i = 0; i < sortedData.length - 1; i ++) {
      //error("i:  " + sortedData[i].title + ", i + 1: " + sortedData[i+1].title);
      expect(sortedData[i].producer >= sortedData[i+1].producer).toBe(true);
    }
  });
  
});




describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('returns `computeStats by specie Human`', () => {
    expect(computeStats(data.films,"Human")).toBe(129);
  });

  it('returns `computeStats by specie Totoro`', () => {
    expect(computeStats(data.films,"Totoro")).toBe(3);
  });

  it('returns `computeStats by specie no exist`', () => {
    expect(computeStats(data.films,"chair")).toBe(0);
  });
});

