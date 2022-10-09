import TodoItem from "./TodoItem";
import { MouseEvent } from "react";

type TodoData = {
  id: string;
  done: boolean;
  content: string;
};

type TodoDataList = TodoData[];

type TodoListProps = {
  todoList: TodoDataList;
  onChange: (id: string, event: MouseEvent) => void;
};

function TodoList(props: TodoListProps) {
  const { todoList, onChange } = props;
  return (
    <div className=" w-96 h-156 list-shadow">
      <div className="w-1/1 h-16">
        <input
          className="w-1/1 h-16 block border-none margin-0 padding-0"
          placeholder="What needs to be done?"
        />
      </div>
      {todoList.map((todo: TodoData) => {
        const { id, done, content } = todo;
        return (
          <TodoItem
            key={id}
            onChange={onChange}
            id={id}
            done={done}
            content={content}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
