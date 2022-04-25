export default async function () {
  const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const jsonData = await results.json();
  return jsonData;
}
