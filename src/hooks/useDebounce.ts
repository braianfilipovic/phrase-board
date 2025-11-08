import { useEffect, useState } from "react";

//Adds a delay to value updates until it stops changing for a given time.
export default function useDebounce<T>(
  value: T,
  delay: number,
  bypassValue?: string
) {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    if (bypassValue !== undefined && bypassValue === value) {
      setDebounced(value);
    } else {
      const identifier = setTimeout(() => setDebounced(value), delay);
      return () => clearTimeout(identifier);
    }
  }, [value, delay, bypassValue]);

  return debounced;
}
