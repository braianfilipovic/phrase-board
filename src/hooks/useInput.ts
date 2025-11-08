import { useContext } from "react";
import { AppContext } from "../store/context/AppContext.tsx";

export function useInput() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useInput must be used within an AppProvider");
  }
  
  const { input, setInput } = context;
  return { input, setInput };
}
