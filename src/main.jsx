import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { NextUIProvider } from "@nextui-org/react";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </NextUIProvider>
  </StrictMode>
);
