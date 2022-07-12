import './App.css';
import Form from './components/FileImportForm/FileImportForm.js'
import DataTable from './components/DataTable/DataTable.js'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Milan's UBNT Project</h1>
      </header>
      <Form />
      <DataTable />
    </div>
  );
}

export default App;
