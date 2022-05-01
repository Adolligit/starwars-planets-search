import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

const listFilter = {
  column: [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'],
  comparison: ['maior que', 'menor que', 'igual a'],
};

function FilterMenu() {
  const [column, setColumn] = useState(listFilter.column[0]);
  const [comparison, setComparison] = useState(listFilter.comparison[0]);
  const [numberField, setNumberField] = useState(0);

  const {
    setFunctions: {
      setFilterByName,
      setfilterByNumericValues,
      setNumericFilterApplied,
    },
  } = useContext(Context);

  useEffect(() => setfilterByNumericValues([{ column, comparison, value: numberField }]),
    [column, comparison, numberField, setfilterByNumericValues]);

  function createListBox(name, arrValues, setFunction) {
    return (
      <select
        id={ name }
        name={ name }
        key={ name }
        data-testid={ `${name}-filter` }
        onChange={ ({ target: { value } }) => setFunction(value) }
      >
        {
          arrValues.map((e) => (
            <option value={ e } key={ e }>{ e }</option>
          ))
        }
      </select>
    );
  }

  return (
    <div>
      <label
        htmlFor="search"
      >
        Search:
        <input
          type="text"
          name="search"
          placeholder="search anything about the planets"
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => setFilterByName({ name: value }) }
        />
      </label>
      {
        Object.keys(listFilter).map((key, index) => (
          createListBox(key, listFilter[key], (!index) ? setColumn : setComparison)
        ))
      }
      <input
        type="number"
        data-testid="value-filter"
        value={ numberField }
        onChange={ ({ target: { value } }) => setNumberField(value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setNumericFilterApplied(true) }
      >
        Aplicar filtro
      </button>
    </div>
  );
}

export default FilterMenu;
