import React from "react";
import TodoMain from "./TodoMain";

function TodoPage(props) {
  return (
    <>
      <div className="w-full p-3 mainContainer flex justify-center items-center">
        <div className=" innerContainer overflow-y-scroll lg:w-3/5 w-full  md:h-4/5 h-screen mt-24 mb-2 bg-gray-600 rounded-xl md:p-12 p-5 ">
          <TodoMain />
        </div>
      </div>
    </>
  );
}

export default TodoPage;
