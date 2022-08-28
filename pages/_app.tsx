import React, { useEffect } from "react";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useDispatch } from "react-redux";
import store from "../store/store";
import { authActions } from "../store/auth/auth";

function MyApp({ Component, pageProps }: AppProps) {
  /*   const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    dispatch(authActions.checkIfTokenExists());
  }, [dispatch, token]); */

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
