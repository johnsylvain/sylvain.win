import { h } from 'kobra';
import style from './style.css';

export const Todo = props => {
  return (
    <li
      className={[style.todo, props.completed ? style.completed : ''].join(' ')}
      onClick={props.onTodoClick}
      onDblClick={props.onTodoDoubleClick}
    >
      {props.text}
    </li>
  );
};
