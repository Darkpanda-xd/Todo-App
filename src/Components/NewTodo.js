import React, { useState } from "react";
import style from './newTodo.module.css'

const NewTodo = (props) => {
   
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });
  const { title, desc } = todo;

  const handelChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return {
        ...oldTodo,
        [name]: event.target.value,
      };
    });
  };
  const handelSubmitInput = (event) => {
    event.preventDefault();
    props.onHandelTodo(todo)
    setTodo({title:'',desc:''})
  };

  return (
    <form onSubmit={handelSubmitInput} className={style.form}>
      <div className={style["field-area"]}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handelChange}
          required
        />
      </div>
      <div className={style['field-area']}>
        <label>Desc: </label>
        <textarea
          type="text"
          name="desc"
          value={desc}
          onChange={handelChange}
        />
      </div>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
