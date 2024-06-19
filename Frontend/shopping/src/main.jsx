import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/routes'
import ShopContextProvider from './Context/ShopContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <RouterProvider router={router} />
    <ToastContainer/>
  </ShopContextProvider>
)
