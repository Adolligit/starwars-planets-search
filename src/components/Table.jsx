import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';

function Table() {
  const { data } = useContext(Context);

  return (
    <ul>
      {
        (data)
          ? (data.results.map((planet) => (<li key={ planet.name }>{ planet.name }</li>)))
          : ''
      }
    </ul>
  );
}

export default Table;
