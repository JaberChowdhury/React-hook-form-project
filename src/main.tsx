import "./index.css";
import "./pico.min.css";

// src/main.tsx

import { createRoot } from "react-dom/client";
// import { Routes } from "@generouted/react-router";
import { Routes } from "@generouted/react-router/lazy"; // route-based code-splitting

createRoot(document.getElementById("root")!).render(<Routes />);
