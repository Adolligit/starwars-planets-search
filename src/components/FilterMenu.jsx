import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterMenu() {
  const { setFunctions: { setFilterByName } } = useContext(Context);

  function onSearch({ target: { value } }) {
    setFilterByName({ name: value });
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
          onChange={ onSearch }
        />
      </label>
    </div>
  );
}

export default FilterMenu;
