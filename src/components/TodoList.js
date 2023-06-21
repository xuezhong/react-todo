import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

function TodoList(props) {
    const {todoList, onRemoveTodo} = props;
    return (
      <nav>
        <ul>
        {
          todoList.map(
            (item) => {
              return <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo}></TodoListItem>
            }
          )
        }
      </ul>
      </nav>
    );
}
TodoList.propTypes = {
  todoList:PropTypes.array.isRequired,
  onRemoveTodo:PropTypes.func.isRequired
};
export default TodoList;