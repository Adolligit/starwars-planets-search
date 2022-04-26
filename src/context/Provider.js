import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { apiWithoutResidents } from '../api/getInfoPlanets';

function Provider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    apiWithoutResidents().then((json) => setData(json));
  }, []);

  return (
    <Context.Provider value={ { data } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
