import { useState, useEffect } from "react";

const useDebounce = (func, delay) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  const debouncedFunction = (...args) => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    setTimer(newTimer);
  };

  return debouncedFunction;
};

export default useDebounce;
