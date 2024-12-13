import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";

// components
import App from "./App.tsx";
import { PopupContextProvider } from "./context/PopupContextProvider.tsx";
import { QuestionContextProvider } from "./context/QuestionContextProvider.tsx";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline>
      <QuestionContextProvider>
        <PopupContextProvider>
          <App />
        </PopupContextProvider>
        </QuestionContextProvider>
    </CssBaseline>
  </StrictMode>
);
