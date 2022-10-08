import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <div className=" w-96 h-156 list-shadow">
      <div className="w-1/1 h-16">
        <input
          className="w-1/1 h-16 block border-none margin-0 padding-0"
          placeholder="What needs to be done?"
        />
      </div>
      <TodoItem id="1" done={false} content="first todo" />
    </div>
  );
}

export default TodoList;
