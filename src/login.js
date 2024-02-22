// Osittainen kirjautumis-funktio => jatkuu palvelinpuolella

function login() {
  var username;
  var password;

  // Palvelimelle pyyntö
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
