import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { signup } from "../../services/Signup";
import axios from "axios";

const SignupForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const data = {
    email: "test1@test.com",
    password: "password",
    returnSecureToken: true,
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("ok");

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmrtw_fwqDuRfQDSDCK2VGuVXLSI-G5P8",
        data
      )
      .then((res) => console.log(res));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button className="bg-brown" label="Sign up">
        Sign up
      </Button>
    </form>
  );
};

export default SignupForm;
