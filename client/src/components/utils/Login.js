/* Kirjautumisen front-end toteutus
Login komponentti, joka sisältää input-kentät käyttäjänimen ja salasanan syöttämiseen sekä login-napin.
implementaatio => määrittele variablet username ja password,
fetch() API:lla => /login endpoint palvelimen handleriin,
*/
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserState } from "../../actions/userActions";

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
    fetch("users/login", {
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
          throw new Error("Virheellinen käyttäjätunnus tai salasana");
        }
      })
      .then((data) => {
        // Kirjautuminen onnistui
        if (data.success) {
          console.log("Kirjautuminen onnistui");
          dispatch(setUserState(data.user));
          localStorage.setItem("userState", JSON.stringify(data.user));
        } else {
          throw new error(data.message);
        }
      })
      .catch((error) => {
        // Kirjautuminen epäonnistui
        setError(error.message);
        console.error("Kirjautuminen epäonnistui", error);
      });
  };
  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
