import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes'
import AuthProvider from './providers/AuthProvider'
import { Fade } from 'react-awesome-reveal'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Fade>
        <div className="font-poppins ">
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </div>
      </Fade>
    </QueryClientProvider>
  </StrictMode>,
)
