import React, { useState } from "react";
import LoginForm from "../../components/Forms/LoginForm";
import SignupForm from "../../components/Forms/SignupForm";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import Main from "../../components/Layout/Main/Main";

const Login = () => {
  const [isShown, setIsShow] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Header />
      <Main>
        {isShown && <LoginForm />}
        {!isShown && <SignupForm />}
        {/* <Button>Toggle</Button> */}
      </Main>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
