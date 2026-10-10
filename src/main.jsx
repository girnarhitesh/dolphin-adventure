import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const rootEl = document.getElementById("root");
const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

if (rootEl.firstElementChild) {
  hydrateRoot(rootEl, tree);
} else {
  createRoot(rootEl).render(tree);
}
