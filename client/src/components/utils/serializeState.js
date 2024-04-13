// Muuntaa Redux tilan JSON muotoon
const serializeState = (state) => {
  return JSON.stringify(state);
}

export default serializeState;