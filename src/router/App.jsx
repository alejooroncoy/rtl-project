import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Auth from "../pages/Auth";
import Login, { actionLogin } from "../pages/Auth/Login";
import Register, { actionRegister } from "../pages/Auth/Register";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="auth" element={<Auth />}>
          <Route action={actionLogin} path="login" element={<Login />} />
          <Route
            action={actionRegister}
            path="register"
            element={<Register />}
          />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
