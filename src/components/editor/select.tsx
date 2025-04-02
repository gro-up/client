import './styles/index.css';

interface SelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  value: string;
}

export const Select = ({ onChange, options, value }: SelectProps) => {
  return (
    <select className="toolbar-item code-language" onChange={onChange} value={value}>
      <option hidden={true} value="" />
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
