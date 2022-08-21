import axios from "axios";

export function signup() {
  try {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmrtw_fwqDuRfQDSDCK2VGuVXLSI-G5P8",
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
  } catch (err) {}
}
