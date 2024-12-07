import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";

// components
import App from "./App.tsx";
import { ContextProvider } from "./context/ContextProvider.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline>
      <ContextProvider>
      <App />
      </ContextProvider>
    </CssBaseline>
  </StrictMode>
);
