import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formValues = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmrtw_fwqDuRfQDSDCK2VGuVXLSI-G5P8",
        formValues
      )
      .then((res) => {
        dispatch(
          authActions.login({
            token: res.data.idToken,
            id: res.data.localId,
            displayableName: res.data.displayName,
            email: res.data.email,
          })
        );
      });
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
      <Button className="bg-brown" label="Sign in">
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;
