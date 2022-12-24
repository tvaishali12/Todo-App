import Button from "./Button";

const EditTodos = ({ value, onChange, updateTodo, items }) => {
  return (
    <>
      <input
        type={"text"}
        value={value}
        placeholder="Enter new todo title"
        onChange={(e) => onChange(e.target.value)}
      />
      <Button onClick={() => updateTodo(items)} label={"Update"} />
    </>
  );
};
export default EditTodos;
