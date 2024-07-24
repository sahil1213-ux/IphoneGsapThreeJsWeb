/**
 * Three js
 * npm i three @react-three/drei @react-three/fiber
 * // sentry is the package to debug and optimise the performance of the app
 * npm install --save @sentry/react
 * npx @sentry/wizard@latest -i sourcemaps
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//...
import * as Sentry from "@sentry/react";

// step 1 is to install dependency and then initialise the sentry
Sentry.init({
  dsn: "https://f5ab8270fddf12506dc363aa3ac6b226@o4507656925741056.ingest.us.sentry.io/4507656931901440",
  integrations: [
    Sentry.browserTracingIntegration(),
    // added
    // Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    // added
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
