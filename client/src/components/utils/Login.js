// Kirjautumisen front-end toteutus
// Login komponentti, joka sisältää input-kentät käyttäjänimen ja salasanan syöttämiseen sekä login-napin.
// POST-pyyntö palvelimelle, joka sisältää JSON-muotoisen käyttäjänimen ja salasanan.

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserState } from "../../store/actions/userActions";
import { loginSuccess } from "../../store/actions/authActions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSkip = (event) => {
    dispatch(loginSuccess());
  };

  const handleLogin = () => {
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        if (data.success) {
          dispatch(loginSuccess(data.userState));
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <h2>Kirjaudu sisään</h2>
      <input
        type="text"
        placeholder="Käyttäjänimi"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Salasana"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleLogin}>Kirjaudu</button>
      <button onClick={handleSkip}>Jatka kirjautumatta</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
