import { h } from 'kobra';
import { TodoForm } from '../components/todo-form';
import { Page } from '../components/page';

export default (state, actions) => {
  return (
    <Page title="Kobra Todos">
      <TodoForm
        todos={state.todos}
        onAddTodo={actions.addTodo}
        onTodoClick={actions.toggleTodo}
        onTodoDoubleClick={actions.removeTodo}
      />
    </Page>
  );
};
