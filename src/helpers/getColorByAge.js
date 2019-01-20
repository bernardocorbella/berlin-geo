const getColorByAge = age => {
  if (age <= 40) return "#00cb09";
  if (age <= 42) return "#a4cb00";
  if (age <= 43) return "#cb8a00";
  if (age <= 45) return "#cb4f00";
  if (age <= 50) return "#cb0026";
  return false;
};

export default getColorByAge;
