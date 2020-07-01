import React from 'react';
import DataTable from './components/data-table';
import DB from "./assets/users.json";

function App() {
  return <DataTable DB={DB} />;
}

export default App;
