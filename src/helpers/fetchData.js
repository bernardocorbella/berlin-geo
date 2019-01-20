import DATA from "../data/frontend-geo.json";

const fetchData = new Promise(resolve => {
  // Emulate network conditions
  setTimeout(() => resolve(DATA), 2000);
});

export default fetchData;
