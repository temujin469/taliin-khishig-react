import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app.css";
import "react-quill/dist/quill.snow.css";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "./contexts/AuthContext";
import { AdminContextProvider } from "./contexts/AdminStateContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <AdminContextProvider>
          <Toaster position="bottom-center" />
          <App />
        </AdminContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
