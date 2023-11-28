import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createApp } from "./app/setup";
import { DonationsModal } from "./app/features/DonationsModal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>{createApp(<DonationsModal />)}</React.StrictMode>,
);

reportWebVitals();
