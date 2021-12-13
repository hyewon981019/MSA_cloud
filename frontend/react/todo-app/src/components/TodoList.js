import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({todos, removeTodo, toggle}) =>
{
    return (
        <div className="TodoList">
           {
                todos.map((todo) => <TodoListItem key = {todo.id} todo = {todo} removeTodo = {removeTodo} toggle={toggle}/>)
           }
        </div>
    );
}

export default TodoList;