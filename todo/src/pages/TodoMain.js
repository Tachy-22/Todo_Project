import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoMain() {
 
  const [isChecked, setIsChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [testTodos, setTestTodos] = useState([]);
  const handleChange = (event) => {
    setInputTodo(event.target.value);
    setIsChecked(false);
  };

  const handleCheck = ( todoState, todo) => {
    todo.state = !todoState;
    setIsChecked(!isChecked);
   
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputTodo.trim() !== "") {
      const newTestTodos = [
        ...[
          {
            todo: inputTodo,
            id: Math.floor(Math.random() * 1000),
            state: isChecked,
          },
        ],
        ...testTodos,
      ];
      setTestTodos(newTestTodos);
      setInputTodo("");
    } else {
      return;
    }
  };

  return (
    <>
      <div className=" h-full justify-start items-start w-full">
        <div>
          <TodoForm
            handleChange={handleChange}
            handleFormSubmit={handleFormSubmit}
            inputTodo={inputTodo}
          />
        </div>
        <div className=" pb-8">
          <TodoList
            todos={todos}
            testTodos={testTodos}
            setTestTodos={setTestTodos}
            setTodos={setTodos}
            open={open}
            setOpen={setOpen}
            handleCheck={handleCheck}
          />
        </div>
      </div>
    </>
  );
}

export default TodoMain;
