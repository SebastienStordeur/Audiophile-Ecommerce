import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import axios from "axios";

const LoginForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmrtw_fwqDuRfQDSDCK2VGuVXLSI-G5P8",
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "test@test.com",
            password: "password",
            returnSecureToken: true,
          }),
        }
      )
      .then((res) => console.log(res));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input type="email" id="email" value="" />
      <Input type="password" id="password" value="" />
      <Button className="bg-brown" label="Sign in">
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;
