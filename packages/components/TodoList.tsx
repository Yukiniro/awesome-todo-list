import TodoItem from "./TodoItem";
import { MouseEvent, useCallback } from "react";
import TodoInput from "./TodoInput";
import FilterOption from "./FilterOption";

type TodoData = {
  id: string;
  done: boolean;
  content: string;
};

type TodoDataList = TodoData[];

type TodoListProps = {
  todoList: TodoDataList;
  filterType: string;
  onFilterChange: (filterType: string) => void;
  onChange: (id: string, event: MouseEvent) => void;
  addTodo: (content: string) => void;
};

function TodoList(props: TodoListProps) {
  const { todoList, onFilterChange, onChange, addTodo, filterType } = props;

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
      <div className="h-8 flex justify-end items-center">
        <FilterOption
          onChange={onFilterChange}
          checked={filterType === "All"}
          name="All"
        />
        <FilterOption
          onChange={onFilterChange}
          checked={filterType === "Active"}
          name="Active"
        />
        <FilterOption
          onChange={onFilterChange}
          checked={filterType === "Completed"}
          name="Completed"
        />
      </div>
      <div className="overflow-y-scroll h-132">
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
    </div>
  );
}

export type { TodoData, TodoDataList, TodoListProps };
export default TodoList;
