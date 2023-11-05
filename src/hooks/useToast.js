import { nanoid } from "nanoid";
import { useState } from "react";

const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    const toast = {
      id: nanoid(),
      message,
      type: "failure",
    };

    setToasts((prevToasts) => [...prevToasts, toast]);

    setTimeout(() => {
      removeToast(toast.id);
    }, 3 * 1000);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return { toasts, setToasts, showToast, removeToast };
};

export { useToast };
