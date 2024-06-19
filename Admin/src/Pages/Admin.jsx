import { Routes, Route } from 'react-router-dom';
import Sidebar from "../Components/Sidebar"
import "./Admin.css"
import SingleAddProduct from "../Components/SingleAddProduct"
import ProductList from "../Components/ProductList"

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<SingleAddProduct />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </div>
  )
}

export default Admin
