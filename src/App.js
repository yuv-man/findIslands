import React, {useState} from 'react'
import './App.css';
import Router from './components/Router'
import { MatrixContext } from './libs/MatrixContext';

function App() {

  const [rows, setRows] = useState('')
  const [cols, setCols] = useState('')
  const [grid, setGrid] = useState([])

  return (
    <div className="App">
      <MatrixContext.Provider value={{rows, setRows, cols, setCols, grid, setGrid}}>
        <Router/>
      </MatrixContext.Provider>
    </div>
  );
}

export default App;
