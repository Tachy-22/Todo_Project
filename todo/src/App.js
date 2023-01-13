import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoPage from "./pages/TodoPage";
import TaskOrganizer from "./pages/TaskOrganizer";
function App(props) {
  return (
    <>
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todo_list" element={<TodoPage />} />
          <Route path="task_organizer" element={<TaskOrganizer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
