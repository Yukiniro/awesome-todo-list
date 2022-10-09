import { useCallback, useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: "1",
      done: false,
      content: "First Todo",
    },
  ]);

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

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <TodoList onChange={onTodoChange} todoList={todoList} />
    </div>
  );
}

export default App;
