import DATA from "../data/frontend-geo.json";

export const fetchData = new Promise(resolve => {
  // Emulate network conditions
  setTimeout(() => resolve(DATA), 2000);
});
