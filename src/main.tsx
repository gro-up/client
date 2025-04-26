import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Router, ROUTER_PATH } from "./router";
import { queryClient } from "./query";
import { Toaster } from "./components/shadcn";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider defaultSetOptions={{ path: ROUTER_PATH.PUBLIC.LANDING }}>
        <BrowserRouter>
          <Router />
          <Toaster />
        </BrowserRouter>
      </CookiesProvider>
    </QueryClientProvider>
  </StrictMode>
);
