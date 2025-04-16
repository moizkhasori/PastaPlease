import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";

// components
import App from "./App.tsx";
import { PopupContextProvider } from "./context/PopupContextProvider.tsx";
import { PastaContextProvider } from "./context/PastaContextProvider.tsx";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline>
        <PastaContextProvider>
          <PopupContextProvider>
          <App />
          </PopupContextProvider>
        </PastaContextProvider>
    </CssBaseline>
  </StrictMode>
);
