import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Auth from "../pages/Auth";
import Login, { actionLogin } from "../pages/Auth/Login";
import Register, { actionRegister } from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard";
import Layout from "../layouts/Layout";
import Products from "../pages/Products";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="auth" element={<Auth />}>
          <Route action={actionLogin} path="login" element={<Login />} />
          <Route
            action={actionRegister}
            path="register"
            element={<Register />}
          />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
