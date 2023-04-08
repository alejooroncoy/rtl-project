import { useContext } from "react";
import { userContext } from "../contexts/UserContext";

export default function useUser() {
  const { user, setUser } = useContext(userContext);
  return [user, setUser];
}
