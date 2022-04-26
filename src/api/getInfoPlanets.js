export default async function () {
  const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const jsonData = await results.json();
  return jsonData;
}

export async function apiWithoutResidents() {
  const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const jsonData = await results.json();

  jsonData.results = jsonData.results.filter((planet) => {
    delete planet.residents;
    return planet;
  });

  return jsonData;
}
