import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";

import './App.css'

function App() {


  return (
    <>
   <div className="min-h-screen bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
