import serializeState from "../../utils/serializeState";

const saveProgress = (userId, reduxState) => {
  const serializedState = serializeState(reduxState);
  fetch("/users/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, state: serializedState }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Progress saved");
      } else {
        console.log("Failed to save progress");
      }
    })
    .catch((error) => console.log("Failed to save progress", error));
};

export default saveProgress;
