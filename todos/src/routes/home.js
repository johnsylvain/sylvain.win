import { h } from "kobra";
import { TodoForm } from "../components/todo-form";
import { Page } from "../components/page";

export default (state, dispatch) => {
  return (
    <Page title="Kobra Todos">
      <TodoForm
        todos={state.todos}
        onAddTodo={(text) => dispatch({ type: "ADD_TODO", payload: text })}
        onTodoClick={(id) => dispatch({ type: "TOGGLE_TODO", payload: id })}
        onTodoDoubleClick={(id) => dispatch({ type: "REMOVE_TODO", payload: id })}
      />
    </Page>
  );
};
