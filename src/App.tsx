import React, { useState } from 'react';
import './App.css';

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {

  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([])
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    setValue(' ')
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      </form>
    </div>
  );
}

export default App;
