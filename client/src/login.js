/* Osittainen kirjautumis-funktio
implementaatio => määrittele variablet username ja password,
fetch() API:lla => /login endpoint palvelimen handleriin,
*/

function login() {
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
        throw new Error("Invalid username or password");
      }
    })
    .then((data) => {
      // Kirjautuminen onnistui
      console.log(data);
    });
}
