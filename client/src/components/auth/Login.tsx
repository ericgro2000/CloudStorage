import { useEffect, useState } from "react";
import "./auth.css";
import Form from "utils/form/form";
import { setUser } from "store/reducers/userReducer";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "api/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, isLoading, isSuccess }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      console.log("Login successful:");
      console.log("user", data.user);
      console.log("token", data.token);
      dispatch(setUser(data.user));
      localStorage.setItem("token", data.token);
    }
  }, [isSuccess]);

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
