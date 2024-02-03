// @ts-nocheck
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  function Signin() {
    if (username.length === 0) {
      console.log("Enter valid username");
    }
    if (password.length < 8) {
      console.log("Password should be greater than 8");
    }
  }
  return (
    <div>
      <input
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={Signin}>SignIn</button>
    </div>
  );
}

export default Login;
