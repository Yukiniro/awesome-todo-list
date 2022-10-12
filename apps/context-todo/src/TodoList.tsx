import TodoItem from "components/TodoItem";
import { MouseEvent, useCallback, useContext } from "react";
import TodoInput from "components/TodoInput";
import FilterOption from "components/FilterOption";
import { FilterTypeContext, TodoListContext } from "./App";

type TodoData = {
  id: string;
  done: boolean;
  content: string;
};

type TodoDataList = TodoData[];

type TodoListProps = {
  title: string;
  onFilterChange: (filterType: string) => void;
  onChange: (id: string, event: MouseEvent) => void;
  addTodo: (content: string) => void;
};

function TodoList(props: TodoListProps) {
  const { title, onFilterChange, onChange, addTodo } = props;
  const filterType = useContext(FilterTypeContext);
  const todoList = useContext(TodoListContext);
  const handleInputChange = useCallback(
    (value: string) => {
      addTodo(value);
    },
    [addTodo]
  );

  return (
    <div className="w-96 h-156 border-rounded-4 list-shadow">
      <div className="text-3xl h-16 font-mono p-4 border-gray-200 border-b-1 text-center">
        {title}
      </div>
      <div className="w-1/1 h-16 overflow-hidden">
        <TodoInput handleConfirm={handleInputChange} />
      </div>
      <div className="h-8 border-gray-200 border-t-1 border-b-1 flex justify-end items-center">
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
      <div className="overflow-y-scroll h-112">
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
