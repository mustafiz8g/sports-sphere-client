import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes'
import AuthProvider from './providers/AuthProvider'
import { Fade } from 'react-awesome-reveal'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<Fade>
<div className="font-poppins ">
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
    </div>
</Fade>

  </StrictMode>,
)
