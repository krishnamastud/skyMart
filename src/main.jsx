import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.jsx'
import { ToastContainer } from 'react-toastify';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { CartProvider } from './context/CartContext.jsx'

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <App />
      <ToastContainer />
    </CartProvider>
  </QueryClientProvider>
)
