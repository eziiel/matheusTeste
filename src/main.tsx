import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes2 from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Routes2 />
  </StrictMode>
);
