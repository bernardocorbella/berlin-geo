const getPopupString = ({ name, population, averageAge, area = 0, ring = 0 }) =>
  `<p>Name: <span>${name}</span></p><p>Population: <span>${population}</span></p><p>Average age: <span>${averageAge}</span></p><p>Area: <span>${area} km<sup>2</sup></span></p><p>Ring: <span>${ring} km<sup>2</sup></span></p>`;

export default getPopupString;
