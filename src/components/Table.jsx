import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';

function Table() {
  const [headers, setHeaders] = useState([]);
  const { data, filterByName } = useContext(Context);

  useEffect(() => {
    if (data) {
      setHeaders(Object.keys(data.results[0]));
    }
  }, [data]);

  function listPlanets() {
    const filteredPlanets = data.results.filter(({ name }) => (
      name.toLowerCase().includes(
        filterByName.name.toLowerCase(),
      )
    ));

    return filteredPlanets.map((planet) => (
      <tr key={ planet.name }>
        {
          Object.values(planet)
            .map((dataField) => (
              <td key={ dataField }>{ dataField }</td>
            ))
        }
      </tr>
    ));
  }

  return (
    <table>
      <thead>
        <tr>
          {
            headers.map((header) => (<th key={ header }>{ header }</th>))
          }
        </tr>
      </thead>
      <tbody>
        {
          (data)
            ? listPlanets()
            : <tr>{}</tr>
        }
      </tbody>
    </table>
  );
}

export default Table;
