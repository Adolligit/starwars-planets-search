import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';

function Table() {
  const {
    data,
    listPlanets,
    filterByName,
  } = useContext(Context);
  const [headers, setHeaders] = useState([]);

  useEffect(() => setHeaders(Object.keys(data.results[0])), [data]);

  function createListing() {
    const search = listPlanets.filter(({ name }) => (
      name.toLowerCase().includes(filterByName.name.toLowerCase())
    ));

    return search.map((planet) => (
      <tr key={ planet.name }>
        {
          Object.values(planet).map((dataField) => (
            <td key={ dataField }>{ dataField }</td>
          ))
        }
      </tr>
    ));
  }

  return (
    <table>
      <thead>
        <tr>{ headers.map((header) => (<th key={ header }>{ header }</th>)) }</tr>
      </thead>
      <tbody>{ createListing() }</tbody>
    </table>
  );
}

export default Table;
