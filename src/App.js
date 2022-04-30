import React from 'react';
import Table from './components/Table';
import FilterMenu from './components/FilterMenu';
import Provider from './context/Provider';

export default function App() {
  return (
    <Provider>
      <FilterMenu />
      <Table />
    </Provider>
  );
}
