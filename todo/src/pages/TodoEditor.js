import React from "react";
import Save from "./check-svgrepo-com.svg";
import Cancel from "./cancel-svgrepo-com.svg";
function TodoEditor({
  editInput,
  handleEditSave,
  handleEditChange,
  handleEditFormSubmit,
  handleEditCancel,
}) {
  return (
    <form
      className="flex my-5 bg-gray-700 p-3 space-x-3 justify-between rounded-lg"
      id="editInput"
      onSubmit={handleEditFormSubmit}
    >
      <input
        className=" bg-gray-700 w-full border-none outline-none text-white px-3"
        type="text"
        value={editInput}
        onChange={handleEditChange}
        autoFocus
      ></input>
      <div className="flex space-x-3">
        <button
          className="active:brightness-200 w-5"
          type="submit"
          onClick={handleEditSave}
        >
          <img src={Save} alt="save"></img>
        </button>
        <button
          className="w-4 active:brightness-200"
          type="submit"
          onClick={handleEditCancel}
        >
          <img src={Cancel} alt="Cancel"></img>
        </button>
      </div>
    </form>
  );
}

export default TodoEditor;
