import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import "./index.css";

// Detect subfolder automatically (e.g., /mandalamoon)
const slug = window.location.pathname.split("/").filter(Boolean)[0] || "";
const BASE = import.meta.env.DEV ? "" : (slug ? `/${slug}` : "/");

createRoot(document.getElementById("root")!).render(
  <Router base={BASE}>
    <App />
  </Router>
);
