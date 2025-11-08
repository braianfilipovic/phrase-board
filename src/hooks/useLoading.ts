import { useContext } from "react";
import { AppContext } from "../store/context/AppContext.tsx";

export function useLoading() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useLoading must be used within an AppProvider");
  }

  const { loading, setLoading } = context;
  return { loading, setLoading };
}
