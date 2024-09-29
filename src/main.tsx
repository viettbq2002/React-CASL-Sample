import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SessionProvider } from "./components/SessionProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SessionProvider userId="user2">
      <App />
    </SessionProvider>
  </StrictMode>
);
