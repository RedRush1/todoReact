import React from "react";
import Todo from "./Todo";

const ToDoList =  ( {todos} ) => {
    console.log(todos)
    return(
        <div className="todo-container">
            <ul className="todo-list">

            </ul>
        </div>
    );
};

export default ToDoList;