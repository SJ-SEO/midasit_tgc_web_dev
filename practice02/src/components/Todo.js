import './Todo.css';

function Todo({todo}) {
    const id = todo.id;
    const todoDesc = todo.todo;
    const completed = todo.completed;

    return (
        <li key={id} className={completed ? "todo_completed" : "todo_incompleted"}>
            {todoDesc}
            {/* <label>
                <input type="checkbox" className="checkbox" checked={completed} />
                {todoDesc}
            </label> */}
            </li>
      );
}

export default Todo;
