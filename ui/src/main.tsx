import 'minireset.css/minireset.min.css'
import 'semantic-ui-css/semantic.min.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
