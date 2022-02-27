import { filterData, sortData, computeStats } from '../src/data.js';
import data from '../src/data/ghibli/ghibli.js'; //'../ ./data/ghibli/ghibli.js';


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns `filterData by title`', () => {
    expect(filterData( data.films[0], "title")).toBe("Castle in the Sky");
  });

  it('returns `filterData by director `', () => {
    expect(filterData(data.films[1], "director")).toBe("Hayao Miyazaki");
  });

  it('returns `filterData by release date`', () => {
    expect(filterData(data.films[1],"release_date")).toBe("1988");
  });
});



describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns `sortData`', () => {
    expect(sortData()).toBe('OMG');
  });

  it('returns `sortData`', () => {
    expect(sortData()).toBe('OMG');
  });

  it('returns `sortData`', () => {
    expect(sortData()).toBe('OMG');
  });
});




describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('returns `computeStats`', () => {
    expect(computeStats()).toBe('OMG');
  });

  it('returns `computeStats`', () => {
    expect(computeStats()).toBe('OMG');
  });

  it('returns `computeStats`', () => {
    expect(computeStats()).toBe('OMG');
  });
});

