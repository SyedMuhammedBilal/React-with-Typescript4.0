import React from 'react';
import './App.css';
import TextField from './TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField text="hello" person={{firstName: '', lastName: ''}} />
    </div>
  );
}

export default App;
