import TodoItem from "./TodoItem";
import { MouseEvent, FormEvent, useCallback } from "react";
import TodoInput from "./TodoInput";

type TodoData = {
  id: string;
  done: boolean;
  content: string;
};

type TodoDataList = TodoData[];

type TodoListProps = {
  todoList: TodoDataList;
  onChange: (id: string, event: MouseEvent) => void;
  addTodo: (content: string) => void;
};

function TodoList(props: TodoListProps) {
  const { todoList, onChange, addTodo } = props;

  const handleInputChange = useCallback(
    (value: string) => {
      addTodo(value);
    },
    [addTodo]
  );

  return (
    <div className="w-96 h-156 border-rounded-4 list-shadow">
      <div className="w-1/1 h-16">
        <TodoInput handleConfirm={handleInputChange} />
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
