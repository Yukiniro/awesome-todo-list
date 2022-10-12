import { MouseEvent, useMemo } from "react";
import classNames from "classnames";

type TodoItemProps = {
  id: string;
  done: boolean;
  content: string;
  onChange: (id: string, event: MouseEvent) => void;
};

function TodoItem(props: TodoItemProps) {
  const { id, done, content, onChange } = props;
  const handleClick = (event: MouseEvent) => {
    onChange(id, event);
  };

  const checkClassName = useMemo(() => {
    const baseClassName = "p-l-6 p-r-6 text-2xl";
    if (done) {
      return classNames(
        baseClassName,
        "text-green-200 i-material-symbols:check-box-outline"
      );
    } else {
      return classNames(
        baseClassName,
        "text-gray-400 i-material-symbols-check-box-outline-blank"
      );
    }
  }, [done]);

  const textClassName = useMemo(() => {
    const baseClassName = "text-2xl";
    return done
      ? classNames(baseClassName, "decoration-line-through text-gray-200")
      : baseClassName;
  }, [done]);

  return (
    <div
      onClick={handleClick}
      className="w-1/1 h-16 border border-gray-300 border-l-0 border-r-0 flex items-center"
    >
      <div className={checkClassName} />
      <span className={textClassName}>{content}</span>
    </div>
  );
}

export type { TodoItemProps };
export default TodoItem;
