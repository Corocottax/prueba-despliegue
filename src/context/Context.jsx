import { createContext } from "react";

export const ContextApi = createContext();

export function ContextProvider({ children }) {
  
    let variable = "pepito";

  return (
    <ContextApi.Provider value={{ variable }}>
        {children}
    </ContextApi.Provider>
  );
}
