import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/sections/Header";
import UserContext from "../contexts/UserContext";

const Layout = () => {
  return (
    <UserContext>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </UserContext>
  );
};

export default Layout;
