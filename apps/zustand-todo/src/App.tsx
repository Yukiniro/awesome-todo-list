import TodoList, { TodoDataList } from "components/TodoList";
import create from "zustand";

type TodoStoreState = {
  todoList: TodoDataList;
  filterType: string;
  addTodo: (value: string) => void;
  changeTodo: (id: string) => void;
  changeFilter: (type: string) => void;
};

const useTodoStore = create<TodoStoreState>((set) => {
  return {
    todoList: [],
    filterType: "All",
    addTodo: (value: string) => {
      set((state) => ({
        todoList: [
          { content: value, done: false, id: Date.now().toString() },
          ...state.todoList,
        ],
      }));
    },
    changeTodo: (id: string) => {
      set((state: TodoStoreState) => ({
        todoList: state.todoList.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              done: !todo.done,
            };
          } else {
            return todo;
          }
        }),
      }));
    },
    changeFilter: (type: string) => {
      set({ filterType: type });
    },
  };
});

function App() {
  const filterType = useTodoStore((state) => state.filterType);
  const addTodo = useTodoStore((state) => state.addTodo);
  const onTodoChange = useTodoStore((state) => state.changeTodo);
  const onFilterChange = useTodoStore((state) => state.changeFilter);
  const list = useTodoStore((state) => {
    const { filterType, todoList } = state;
    switch (filterType) {
      case "Active":
        return todoList.filter((item) => !item.done);
      case "Completed":
        return todoList.filter((item) => item.done);
      default:
        return todoList;
    }
  });

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <TodoList
        title="Zustand Todo"
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
