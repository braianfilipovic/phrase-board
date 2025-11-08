import {
  createContext,
  useReducer,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { phraseReducer } from "../reducers/phraseReducer.ts";
import { AppContextType } from "../types/appContextTypes.ts";

const initialState = JSON.parse(localStorage.getItem("phrases") || "[]");

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [phrases, dispatch] = useReducer(phraseReducer, initialState);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("phrases", JSON.stringify(phrases));
  }, [phrases]);

  return (
    <AppContext.Provider value={{ input, setInput, phrases, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
