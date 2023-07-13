import { InputField, InputLabel } from "./Input.styled";
interface InputProps {
  placeholder?: string;
  value?: string;
}

export const Input = ({ placeholder, value }: InputProps) => {
  return (
    <InputLabel>
      <InputField placeholder={placeholder} value={value} />
    </InputLabel>
  );
};
