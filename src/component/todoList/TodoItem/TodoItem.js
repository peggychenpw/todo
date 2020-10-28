import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ text, clickToToggle, clickToDelete, complete, mark, clickToMark }) => {
  return (
    <div className={styles.todoItem} >
      <span
        className={styles.todoItem__text}
        style={{
          textDecoration: complete ? "line-through" : "none",
          color: mark ? "#b03010" : "black"
        }}
        onClick={clickToToggle}
      >
        {text}
      </span>
      <div>
        <button className={styles.todoItem__toggleBtn} onClick={clickToMark} >
          MARK
        </button>
        <button className={styles.todoItem__deleteBtn} onClick={clickToDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
