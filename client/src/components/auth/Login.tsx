import React, { useEffect, useState } from "react";
import "./auth.css";
import Input from "utils/input/Input";
import Form from "utils/form/form";
import { useLoginMutation } from "api/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, isLoading, isSuccess }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess && data) {
      console.log("Login successful:", data.token);
      //localStorage.setItem("token", JSON.stringify(data));
    }
  }, [isSuccess, data]);

  const fields = {
    header: "Login",
    firstField: "email",
    secondField: "password",
    buttonName: "Login",
  };

  return (
    <div className="registration">
      <Form
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        register={login}
        isLoading={isLoading}
        fields={fields}
      />
    </div>
  );
};

export default Login;
