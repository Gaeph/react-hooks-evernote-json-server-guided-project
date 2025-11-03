import React from "react";
import { createRoot } from "react-dom/client"; // React 18+
import "./assets/css/brooke.css";
import App from "./components/App";

// Target root element
const container = document.getElementById("root");
const root = createRoot(container);

// Render the App
root.render(<App />);
