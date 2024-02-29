export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (store) => (next) => (action) => {
  const result = next(action);
  try {
    const serializedState = JSON.stringify(store.getState());
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("Error saving state to local storage:", err);
  }
  return result;
};
