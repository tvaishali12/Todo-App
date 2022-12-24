import { useState } from "react";
import { v4 } from "uuid";
import Button from "./Button";
import TodounputItem from "./TodoInputItem";
import TodoListcomponent from "./TodoList";

const TodoAppProp = () => {
  const [Todoinput, setTodoinput] = useState("");
  const [Todolist, setTodolist] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleAddTodo = () => {
    setTodolist((lastState) => [...lastState, { id: v4(), title: Todoinput }]);
    setTodoinput("");
  };
  const onDeleteTodo = (id) => {
    setTodolist((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const EditTodo = (item) => {
    setEditingTodo(item.id);
    setNewTodoTitle(item.title);
  };

  const updateTodo = () => {
    setTodolist((prevState) => {
      return prevState.map((item) => {
        if (item.id === editingTodo) {
          item.title = newTodoTitle;
        }
        return item;
      });
    });

    setEditingTodo(null);
    setNewTodoTitle(null);
  };

  return (
    <>
      <div>
        <TodounputItem
          value={Todoinput}
          onChange={(value) => setTodoinput(value)}
        />
        {/* <button onClick={handleAddTodo}>Add Todo</button> */}
        <Button onClick={handleAddTodo} label={"Add Todo"} />
      </div>
      <div>
        <TodoListcomponent
          todolist={Todolist}
          onDeleteTodo={onDeleteTodo}
          editingTodo={editingTodo}
          EditTodo={EditTodo}
          newTodoTitle={newTodoTitle}
          onChange={(value) => setNewTodoTitle(value)}
          updateTodo={updateTodo}
        />
        <div></div>
      </div>
    </>
  );
};
export default TodoAppProp;
