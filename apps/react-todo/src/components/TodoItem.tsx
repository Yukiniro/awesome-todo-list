type TodoItemProps = {
  id: string;
  done: boolean;
  content: string;
};

function TodoItem(props: TodoItemProps) {
  const { id, done, content } = props;
  return (
    <div className="w-1/1 h-16 border flex items-center">
      <input checked={done} type="checkbox" />
      <label>{content}</label>
    </div>
  );
}

export default TodoItem;
