import React from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { signup } from "../../services/Signup";
import axios from "axios";

const SignupForm = () => {
  const data = {
    email: "test@test.com",
    password: "password",
    returnSecureToken: true,
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("ok");

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmrtw_fwqDuRfQDSDCK2VGuVXLSI-G5P8",
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
      .then((res) => console.log(res));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input type="email" id="email" />
      <Input type="password" id="password" />
      <Button className="bg-brown" label="Sign up">
        Sign up
      </Button>
    </form>
  );
};

export default SignupForm;
