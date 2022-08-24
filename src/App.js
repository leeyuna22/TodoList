import React from "react";
import TodoList from "./pages/TodoList";
import { Routes, Route } from "react-router-dom";
import DetailTodo from "./pages/DetailTodo";

function App() {

  return (
    <Routes>
      <Route path="/" element={<TodoList/>}/>
      <Route path="/detail/:id" element={<DetailTodo/>}/>
      <Route path="*" element={<>404 NOT FOUND</>}/>
    </Routes>
  )
}

export default App;