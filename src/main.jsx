import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://ba4fcea82166f334564df763106badb4@o4509213190782976.ingest.de.sentry.io/4509213191897168",
  sendDefaultPii: true
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
