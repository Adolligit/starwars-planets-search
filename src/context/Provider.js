import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { apiWithoutResidents } from '../api/getInfoPlanets';

function Provider({ children }) {
  const [data, setData] = useState('');
  const [filterByName, setFilterByName] = useState({ name: '' });

  const setFunctions = { setData, setFilterByName };

  useEffect(() => {
    apiWithoutResidents().then((json) => setData(json));
  }, []);

  return (
    <Context.Provider value={ { data, filterByName, setFunctions } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
