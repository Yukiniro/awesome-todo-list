type FilterOptionProps = {
  name: string;
  checked: boolean;
  onChange: (name: string) => void;
};

function FilterOption(props: FilterOptionProps) {
  const { name, checked, onChange } = props;
  const handleChange = () => {
    onChange(name);
  };
  return (
    <div onClick={handleChange} className="flex items-center m-l-2 m-r-2">
      <div
        className={`text-size-6 m-r-2 ${
          checked
            ? "text-green-300 i-material-symbols:radio-button-checked-outline"
            : "text-gray-300 i-material-symbols:radio-button-checked"
        } `}
      />
      {name}
    </div>
  );
}

export default FilterOption;
