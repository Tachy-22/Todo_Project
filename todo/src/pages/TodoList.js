import React, { useState } from "react";
import TodoEditor from "./TodoEditor";
import Delete from "./icons8-trash-can.svg";
import Edit from "./icons8-edit.svg";
function TodoList({
  todos,
  testTodos,
  setTestTodos,
  open,
  setOpen,
  handleCheck,
}) {
  const [editedId, setEditedId] = useState("");
  const [editInput, setEditInput] = useState("");

  //set react to handle form input
  const handleEditChange = (event) => {
    setEditInput(event.target.value);
  };
  //delete unwanted todo then update
  const deleteTodo = (idOfTodoToDelete) => {
    const updatedTodos = testTodos.filter(
      (todosToRemain) => testTodos.indexOf(todosToRemain) !== idOfTodoToDelete
    );
    setTestTodos(updatedTodos);
  };
  //get editted todo id and the boolean for editor opening
  const openEditor = (id) => {
    setEditedId(id);
    setOpen(!open);
  };
  // set boolean for editor closing
  const handleEditCancel = () => {
    setOpen(!open);
  };
  //handle edit form submission
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    if (editInput.trim() !== "") {
      testTodos[editedId].todo = editInput;
      setOpen(!open);
      setEditInput("");
    } else {
      return;
    }
  };
  // code to render when editor is open
  if (open) {
    return (
      <TodoEditor
        editInput={editInput}
        handleEditFormSubmit={handleEditFormSubmit}
        handleEditChange={handleEditChange}
        handleEditCancel={handleEditCancel}
      />
    );
  }

  return (
    <>
      {testTodos.map((todo, id) => (
        <div
          key={id}
          id="todoContainer"
          className="flex my-5 bg-gray-700 p-3 rounded-lg"
        >
          <input
            type="checkbox"
            checked={todo.state}
            onChange={() => {
              handleCheck(todo.state, todo);
            }}
          ></input>
          <div id="control" className="flex w-full justify-between px-5">
            <p
              className={
                todo.state
                  ? "text-gray-400 line-through  font-bold tracking-wide"
                  : "text-white capitalize"
              }
            >
              {todo.todo}
            </p>
            <div className="flex space-x-2">
              <div
                className="w-5 active:brightness-200"
                id="edit"
                onClick={() => {
                  openEditor(id);
                }}
              >
                <img src={Edit} alt="edit"></img>
              </div>
              <div
                className="w-5 active:brightness-200"
                id="delete"
                onClick={() => {
                  deleteTodo(id);
                }}
              >
                <img src={Delete} alt="delete icon"></img>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
