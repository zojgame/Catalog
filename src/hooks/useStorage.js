import { useState } from "react";

function useStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    const newValue = JSON.stringify(value);
    sessionStorage.setItem(key, newValue);
    setStoredValue(value);
  };

  return [storedValue, setValue];
}

export { useStorage };
