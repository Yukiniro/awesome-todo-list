import { useCallback, useMemo, useState } from "react";
import TodoList, { TodoDataList } from "components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([] as unknown as TodoDataList);
  const [filterType, setFilterType] = useState("All");

  const onTodoChange = useCallback(
    (id: string) => {
      setTodoList(
        todoList.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              done: !todo.done,
            };
          } else {
            return todo;
          }
        })
      );
    },
    [todoList]
  );
  const addTodo = useCallback(
    (value: string) => {
      setTodoList([
        { content: value, done: false, id: Date.now().toString() },
        ...todoList,
      ]);
    },
    [todoList]
  );
  const onFilterChange = useCallback(
    (filterType: string) => {
      setFilterType(filterType);
    },
    [setFilterType]
  );

  const list = useMemo(() => {
    switch (filterType) {
      case "Active":
        return todoList.filter((item) => !item.done);
      case "Completed":
        return todoList.filter((item) => item.done);
      default:
        return todoList;
    }
  }, [filterType, todoList]);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <TodoList
        filterType={filterType}
        onFilterChange={onFilterChange}
        onChange={onTodoChange}
        addTodo={addTodo}
        todoList={list}
      />
    </div>
  );
}

export default App;
