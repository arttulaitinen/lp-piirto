const fetch = require("node-fetch");

const createUser = async (username, password) => {
  const response = await fetch("/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to create user");
  }
};

module.exports = { createUser };
