import React from 'react';
import DataTable from './components/data-table';
import DB from "./assets/users.json";

function App() {
  return (
    <div className="container">
      <DataTable DB={DB} />
    </div>
  
  );
}

export default App;
