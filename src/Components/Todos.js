import React from "react";
import Todo from "./Todo";
import style from "./todos.module.css";

const Todos = (props) => {
  
  return (
    <section className={style.todos}>
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo.todo}
          onRemove={props.onRemove}
          id={todo.id}
        />
      ))}
    </section>
  );
};

export default Todos;
