import React from "react";
import style from "./todo.module.css";

const Todo = (props) => {
  const handelClick=(id)=>{
    props.onRemove(id)
  }
  const { title, desc } = props.todo;
  const {id} = props
  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div >
        <button className={style.btn} onClick={()=>handelClick(id)}>
          <i className="fa fa-trash fa-2x" />
        </button>
      </div>
    </article>
  );
};

export default Todo;
