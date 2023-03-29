import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./router/App";
import "normalize.css";
import "./styles/Fe.scss";
import "./styles/index.scss";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
