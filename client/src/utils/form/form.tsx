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
  fields?: Record<string, string>;
}

const Form: React.FC<FormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  register,
  isLoading,
  fields,
}) => {
  return (
    <div className="registration">
      <div className="registration__header">{` ${fields?.header}`}</div>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder={`Enter ${fields?.firstField}`}
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder={`Enter ${fields?.secondField}`}
      />
      <button
        className="registration__btn"
        onClick={() => register({ email, password })}
        disabled={isLoading}
      >
        {`${fields?.buttonName}`}
      </button>
    </div>
  );
};

export default Form;
