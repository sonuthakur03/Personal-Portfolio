// main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// The main entry point of the application, where the React application is rendered into the DOM. It uses React's StrictMode for highlighting potential problems in the application and wraps the App component, which contains the routing configuration and overall structure of the application.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
