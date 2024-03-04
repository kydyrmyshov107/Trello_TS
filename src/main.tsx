import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import ReduxProvider from "./redux/provider.tsx";
import { BrowserRouter } from "react-router-dom";
import Providers from "./components/pages/Providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider>
        <Suspense fallback={"loading"}>
          <Providers>
            <App />
          </Providers>
        </Suspense>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
