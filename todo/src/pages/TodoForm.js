import React from "react";

function TodoForm({ handleChange, handleFormSubmit, inputTodo }) {
  return (
    <>
      <div className=" w-full flex flex-col justify-start place-items-center h-full  ">
        <h1 className="mb-12 text-5xl font-bold w-full text-center text-white">
          Todo List
        </h1>
        <form
          className="w-full flex justify-between"
          onSubmit={handleFormSubmit}
        >
          <input
            placeholder="Enter todo..."
            className="w-3/4 rounded-lg outline-blue-400 px-3 py-2 bg-gray-200 border border-solid border-gray-100 text-gray-900 font-semibold"
            type="text"
            value={inputTodo}
            onChange={handleChange}
            autoFocus
          ></input>
          <button
            className="w-1/4 rounded-lg active:brightness-200 font-semibold text-white bg-blue-700 ml-2"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
