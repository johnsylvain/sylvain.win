import { h } from "kobra";
import style from "./style.css";

import { Todo } from "../todo";

export const TodoForm = props => {
  const handleFormSubmit = event => {
    event.preventDefault();
    if (event.target.todo.value !== "") {
      props.onAddTodo(event.target.todo.value.trim());
      event.target.todo.value = "";
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className={style.form}>
        <input
          type="text"
          name="todo"
          autocomplete="off"
          placeholder="Add a todo"
          autofocus="on"
        />
      </form>
      {props.todos.length ? (
        <ul className={style.list}>
          {props.todos.map((todo, i) => (
            <Todo
              {...todo}
              key={i}
              onTodoClick={() => props.onTodoClick(i)}
              onTodoDoubleClick={() => props.onTodoDoubleClick(i)}
            />
          ))}
        </ul>
      ) : (
          <div className={style.completedMessage}>You're done! 🎉</div>
        )}
    </div>
  );
};
