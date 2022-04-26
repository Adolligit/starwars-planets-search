import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';

function Table() {
  const [headers, setHeaders] = useState([]);
  const { data } = useContext(Context);

  useEffect(() => {
    if (data) {
      setHeaders(Object.keys(data.results[0]));
    }
  }, [data]);

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
            ? (data.results.map((planet) => (
              <tr key={ planet.name }>
                {
                  Object.values(planet)
                    .map((e) => (
                      <td key={ e }>{ e }</td>
                    ))
                }
              </tr>
            )))
            : <tr>{}</tr>
        }
      </tbody>
    </table>
  );
}

export default Table;
