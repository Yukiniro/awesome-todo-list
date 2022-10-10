import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from "react";

type TodoInputProps = {
  handleConfirm: (value: string) => void;
};

function TodoInput(props: TodoInputProps) {
  const { handleConfirm } = props;

  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const onHandleConfirm = useCallback(() => {
    if (value !== "") {
      handleConfirm(value);
      setValue("");
    }
  }, [handleConfirm, value]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      (inputRef.current as unknown as HTMLInputElement).blur();
    }
  };

  return (
    <input
      ref={inputRef}
      onKeyDown={onKeydown}
      onChange={onChange}
      onBlur={onHandleConfirm}
      value={value}
      className="w-1/1 h-16 block border-none m-0 p-4 text-xl placeholder-italic placeholder-text-xl"
      placeholder="What needs to be done?"
    />
  );
}

export default TodoInput;
