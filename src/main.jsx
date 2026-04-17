import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main>
      <h1>Hola mundo</h1>
    </main>
  </StrictMode>,
);
