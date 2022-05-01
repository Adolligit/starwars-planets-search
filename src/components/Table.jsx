import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';

function Table() {
  const {
    data,
    filterByName,
    filterByNumericValues,
    numericFilterApplied,
  } = useContext(Context);
  const { column, comparison, value } = filterByNumericValues[0];
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    if (data) {
      setHeaders(Object.keys(data.results[0]));
    }
  }, [data]);

  function listPlanets() {
    let search = data.results.filter(({ name }) => (
      name.toLowerCase().includes(filterByName.name.toLowerCase())
    ));

    if (numericFilterApplied) {
      search = search.filter((planet) => {
        if (comparison.includes('maior')) return +planet[column] > +value;
        if (comparison.includes('igual')) return +planet[column] === +value;
        return +planet[column] < +value;
      });
    }

    return search.map((planet) => (
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
          (data) ? listPlanets() : <tr>{}</tr>
        }
      </tbody>
    </table>
  );
}

export default Table;
