import { useState } from "react";
import { createContext } from "react";

export const userContext = createContext();

export default function UserContext({ children }) {
  const [user, setUser] = useState(null);
  const value = {
    user,
    setUser,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
