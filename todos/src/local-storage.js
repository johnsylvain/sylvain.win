export const loadState = key => {
  try {
    const serializedState = window.localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem(key, serializedState);
  } catch (e) {
    // ignore
  }
};
