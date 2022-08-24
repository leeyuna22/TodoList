import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
// import Detail from "../detail/Detail";
import {updateTodo, deleteTodo} from '../../redux/modules/todo.js';
import {useDispatch} from "react-redux";

function Todo({ todo }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="todo-container">
      <div className="button-sangse">
        <a className="button-text" onClick={()=>{navigate("/detail/"+todo.id)}}> 상세보기 </a>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={()=> dispatch(deleteTodo(todo.id)) }
        >
          delete
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => dispatch(updateTodo(todo.id))}>
          {todo.isDone ? "cancel" : "complete"}
        </button>
      </div>
    </div>
  );
}

export default Todo;