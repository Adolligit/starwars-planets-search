import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { apiWithoutResidents } from '../api/getInfoPlanets';

function Provider({ children }) {
  const [data, setData] = useState('');
  const [filterByName, setFilterByName] = useState({ name: '' });

  const [numericFilterApplied, setNumericFilterApplied] = useState(false);
  const [filterByNumericValues, setfilterByNumericValues] = useState([{
    column: '',
    comparison: '',
    value: '',
  }]);

  const providerValue = {
    data,
    filterByName,
    filterByNumericValues,
    numericFilterApplied,
    setFunctions: {
      setData,
      setFilterByName,
      setNumericFilterApplied,
      setfilterByNumericValues,
    },
  };

  useEffect(() => {
    apiWithoutResidents().then((json) => setData(json));
  }, []);

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
