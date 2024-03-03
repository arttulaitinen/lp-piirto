/* Kirjautumisen front-end funktio
Login komponentti, joka sisältää input-kentät käyttäjänimen ja salasanan syöttämiseen sekä login-napin.
implementaatio => määrittele variablet username ja password,
fetch() API:lla => /login endpoint palvelimen handleriin,
*/
const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, serError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    var username;
    var password;

    // Palvelimelle lähtevä pyyntö (JSON muodossa)
    fetch("/login", {
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
        console.log(data);
      })
      .catch((error) => {
        // Kirjautuminen epäonnistui
        console.error("Kirjautuminen epäonnistui", error);
      });
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Käyttäjänimi" value={username} onChange={handleUsernameChange} />
      <input type="password" placeholder="Salasana" value={password} onChange={handlePasswordChange} />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div> 
  );
};

export default login;