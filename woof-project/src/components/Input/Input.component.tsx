import { InputField, InputLabel } from "./Input.styled";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <InputLabel>
      <InputField placeholder={placeholder} value={value} onChange={onChange} />
    </InputLabel>
  );
};
