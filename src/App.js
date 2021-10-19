import React,{ useState } from "react";

import './App.css';
//Importing Components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos , setTodos] = useState([]);
    return (
        <div className="App">
          <header>
              <h1>Today's schedule</h1>
          </header>
          <Form todos={todos} setTodos={setTodos} setInputTex={setInputText}/>
          <ToDoList/>
        </div>
  );
}

export default App;