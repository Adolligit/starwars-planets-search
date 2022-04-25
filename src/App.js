import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';

export default function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}
