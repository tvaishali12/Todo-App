import Button from "./Button";
import EditTodos from "./TodoEdit";

const TodoListcomponent = ({
  todolist,
  onDeleteTodo,

  EditTodo,
  editingTodo,
  newTodoTitle,
  onChange,
  updateTodo,
}) => {
  return (
    <>
      <div>
        {/*------- */}
        {todolist.map((items) => {
          return (
            <>
              <div>
                <ul>
                  <li key={items.id}>
                    {items.id === editingTodo ? (
                      <EditTodos
                        value={newTodoTitle}
                        onChange={onChange}
                        updateTodo={updateTodo}
                        items={items}
                      />
                    ) : (
                      <>
                        <p>{items.title}</p>
                        <Button
                          onClick={() => EditTodo(items)}
                          label={"Edit"}
                        />
                        <Button
                          onClick={() => onDeleteTodo(items.id)}
                          label={"Delete"}
                        />
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default TodoListcomponent;
