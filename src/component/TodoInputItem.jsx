const TodounputItem = ({ type, value, onChange }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {/* ------------------------------------------ */}
      {/* <input
          value={todoTitle}
          type="text"
          placeholder="Enter todo title"
          onChange={(e) => setTodoTitle(e.target.value)}
        /> */}
      {/* -------------------------------------------- */}
    </>
  );
};

TodounputItem.defaultProps = {
  type: "text",
  placeholder: "Enter text here!",
};
export default TodounputItem;
