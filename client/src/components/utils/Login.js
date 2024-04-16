// Kirjautumisen front-end toteutus
// Login komponentti, joka sisältää input-kentät käyttäjänimen ja salasanan syöttämiseen sekä login-napin.
// POST-pyyntö palvelimelle, joka sisältää JSON-muotoisen käyttäjänimen ja salasanan.

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserState } from "../../store/actions/userActions";

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

  const handleLogin = () => {
    // Palvelimelle lähtevä pyyntö (JSON muodossa)
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.text().then((errorMessage) => {
            throw new Error(errorMessage || "Unexpected error occurred");
          });
        }
      })
      .then((data) => {
        // Kirjautuminen onnistui
        if (data.success) {
          console.log("Kirjautuminen onnistui");
          const userData = data.userState;
          dispatch(setUserState(userData));
          localStorage.setItem("userId", data.user); // Katso server.js
          localStorage.setItem("userState", JSON.stringify(data.userState));
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        // Kirjautuminen epäonnistui
        setError(error.message);
        console.error("Kirjautuminen epäonnistui");
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
