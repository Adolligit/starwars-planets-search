import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { apiWithoutResidents } from '../api/getInfoPlanets';

function Provider({ children }) {
  const [listPlanets, setListPlanets] = useState([]);
  const [data, setData] = useState({ results: [{ name: '' }] });
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  const providerValue = {
    data,
    listPlanets,
    filterByName,
    filterByNumericValues,
    setFunctions: {
      setListPlanets,
      setData,
      setFilterByName,
      setfilterByNumericValues,
    },
  };

  useEffect(() => {
    apiWithoutResidents().then((json) => setData(json));
  }, []);

  useEffect(() => setListPlanets(data.results), [data]);

  return (
    <Context.Provider value={ providerValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
