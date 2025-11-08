import { useCallback } from "react";

export function useIdGenerator() {
  const generateId = useCallback((): string => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).slice(2, 10);
    const id = `${timestamp}-${random}`;
    return id;
  }, []);

  return generateId;
}
