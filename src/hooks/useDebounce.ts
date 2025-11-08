import { useEffect, useState } from "react";

//Adds a delay to value updates until it stops changing for a given time.
export default function useDebounce<T>(value: T, delay: number) {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const identifier = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(identifier);
  }, [value, delay]);

  return debounced;
}
