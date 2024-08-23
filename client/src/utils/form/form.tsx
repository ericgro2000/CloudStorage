import React from "react";
import Input from "utils/input/Input";
// import './input.css'; // Assuming this is for styling

interface FormProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  register: ({ email, password }: { email: string; password: string }) => void;
  isLoading: boolean;
}

const Form: React.FC<FormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  register,
  isLoading,
}) => {
  return (
    <div className="registration">
      <div className="registration__header">Регистрация</div>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Введите email..."
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Введите пароль..."
      />
      <button
        className="registration__btn"
        onClick={() => register({ email, password })}
        disabled={isLoading}
      >
        Войти
      </button>
    </div>
  );
};

export default Form;
