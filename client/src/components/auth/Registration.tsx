import React, { useEffect, useState } from "react";
import "./auth.css";
import Input from "utils/input/Input";
import { useRegistrationMutation } from "api/registration";
import Form from "utils/form/form";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, { isLoading, isSuccess }] = useRegistrationMutation();

  // useEffect(() => {
  //   console.log(isSuccess);
  //   if (isSuccess) {
  //     // Redirect to another route after a successful fetch
  //     alert("happily loggined!");
  //   }
  // }, [isSuccess]);
  const fields = {
    header: "Registration",
    firstField: "email",
    secondField: "password",
    buttonName: "Register",
  };

  return (
    <div className="registration">
      <Form
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        register={register}
        isLoading={isLoading}
        fields={fields}
      />
    </div>
  );
};

export default Registration;
