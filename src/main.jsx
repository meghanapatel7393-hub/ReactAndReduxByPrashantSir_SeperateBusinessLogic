import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import "./FoodApp.css";
import App from "./App.jsx";
// import AppCalculator from "./AppCalculator.jsx";

// import BharatClock from "./BharatClock.jsx";
// import FoodApp from "./FoodApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AppCalculator /> */}
    {/* <FoodApp /> */}
    {/* <BharatClock /> */}
    <App />
  </StrictMode>
);
