// todo.js

// Actions
const ADD_TODO = 'todo/ADD_TODO';
const UPDATE_TODO = 'todo/UPDATE_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';

const initialState =

      {todos:[ 
        {
          id: 1,
          title: "리액트 공부하기",
          body: "리액트 기초를 공부해봅시다.",
          isDone: false,
        },
        {
          id: 2,
          title: "리액트 공부하기",
          body: "리액트 기초를 공부해봅시다.",
          isDone: true,
        },
      ]}


// Action Creators
export function addTodo(payload) {
    return { type:ADD_TODO, payload };
}

export function updateTodo(payload) {
    return { type: UPDATE_TODO, payload };
}

export function deleteTodo(payload) {
    return { type: DELETE_TODO, payload };
}

// Reducer
export default function todos(state = initialState, action) {
  
    switch (action.type) {
        case "todo/ADD_TODO":{
          const new_todo_list = [...state.todos, action.payload];
          return {todos:new_todo_list};
        }

        case "todo/UPDATE_TODO": {
            const new_todo_list = [...state.todos].map((todo) => {
              if (todo.id === action.payload) {
                return {
                  ...todo,
                  isDone: !todo.isDone,
                };
              } else {
                return { ...todo };
              }
            });
          return {todos:new_todo_list}; 
        }

        case "todo/DELETE_TODO":  {
          const new_todo_list = [...state.todos].filter((todo) => {
            return todo.id !== action.payload;
          });
          return {todos:new_todo_list};
        }

    default: 
    return state;
    }
}
// const onDeleteHanlder = (todoId) => {
//   const newTodos = todos.filter((todo) => {
//     return todo.id !== todoId;
//   });

//   setTodos(newTodos);
// };

// const onEditHandler = (todoId) => {
//   const newTodos = todos.map((todo) => {
//     if (todo.id === todoId) {
//       return {
//         ...todo,
//         isDone: !todo.isDone,
//       };
//     } else {
//       return { ...todo };
//     }
//   });

//   setTodos(newTodos);
// };
      