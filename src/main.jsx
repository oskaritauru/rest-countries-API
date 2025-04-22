import "./index.css";
// Import the main App component
import App from "./App.jsx";
// Import React library
import React from "react";
// Import ReactDOM for rendering the application to the DOM
import ReactDOM from "react-dom/client";
// Import BrowserRouter for handling routing in the application
import { BrowserRouter } from "react-router-dom";

// Create a root element for rendering the React application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Render the main App component */}
    </BrowserRouter>
  </React.StrictMode>
);
