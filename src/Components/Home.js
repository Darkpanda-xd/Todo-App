import React, { useState } from "react";
import Todos from "./Todos";
import style from "./home.module.css";
import NewTodo from "./NewTodo";
import { v4 as uuidV4 } from "uuid";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const handelRemove = (id) =>{
    setTodos((prevTodo)=>{
      const filterTodo = prevTodo.filter((todo)=> todo.id !== id);
      return filterTodo
    })
  }
  const handelTodo = (todo) => {
    setTodos((prevTodo) => {
      return [
        ...prevTodo,
        { id: uuidV4(), todo },
      ];
    });
  };
  return (
    <div className={style.container}>
      <h1>Todo App</h1>
      <NewTodo
        onHandelTodo={handelTodo}
      />
      <Todos todos={todos} onRemove={handelRemove}/>
    </div>
  );
};

export default Home;
