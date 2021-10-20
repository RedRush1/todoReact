import React,{ useState, useEffect } from "react";

import './App.css';
//Importing Components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {



    const [inputText, setInputText] = useState("");
    const [todos , setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    //RUN ONCE WHEN APP STARTS
    useEffect(() =>{
        getLocalTodos()
    },[]);
    //use effect
    useEffect(() =>{
        filterHandler();
        saveLocalTodos();
    },[todos,status]);


    const filterHandler = () => {
        switch(status){
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }

    const saveLocalTodos = () =>{
        localStorage.setItem("todos",JSON.stringify(todos));
    };

    const getLocalTodos= () =>{
        if(localStorage.getItem("todos") === null){
            localStorage.setItem("todos",JSON.stringify([]));
        }
        else{
            let todoFromLocal = JSON.parse( localStorage.getItem("todos"));
            setTodos(todoFromLocal);
        }
    };

    return (
        <div className="App">
          <header>
              <h1>Today's schedule</h1>
          </header>
          <Form
              todos={todos}
              setTodos={setTodos}
              inputText={inputText}
              setInputText={setInputText}
              setStatus={setStatus}
          />
          <ToDoList
              filteredTodos={filteredTodos}
              setTodos={setTodos}
              todos={todos}
          />
        </div>
  );
}

export default App;