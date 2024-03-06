import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Architects from "./components/Architects";
import Engineers from "./components/Engineers";
import Surveyors from "./components/Surveyors";
import CategoryProducts from "./components/CategoryProducts";
import TagProducts from "./components/TagProducts";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import ConfirmOrder from "./components/ConfirmOrder";
import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login";
import CustomerLogout from "./components/Customer/CustomerLogout";
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Customer/Orders";
import OrderSuccess from "./components/OrderSuccess";
import OrderFailure from "./components/OrderFailure";
import Favorites from "./components/Customer/Favorites";
import Profile from "./components/Customer/Profile";
import ChangePassword from "./components/Customer/ChangePassword";
import AddressList from "./components/Customer/AddressList";
import AddAddress from "./components/Customer/AddAddress";

// Expert imports
import ExpertRegister from "./components/Expert/ExpertRegister";
import ExpertLogin from "./components/Expert/ExpertLogin";
import ExpertDashboard from "./components/Expert/ExpertDashboard";
import ExpertProjects from "./components/Expert/ExpertProjects";
import AddProduct from "./components/Expert/AddProduct";
import ExpertOrders from "./components/Expert/ExpertOrders";
import Clients from "./components/Expert/Clients";
import Reports from "./components/Expert/Reports";
import ExpertProfile from "./components/Expert/ExpertProfile";
import ExpertChangePwd from "./components/Expert/ExpertChangePwd";

import { CartContext } from "./Context";
import { useState } from "react";

const checkCart = localStorage.getItem("cartData");

function App() {
  const [cartData, setCartData] = useState(JSON.parse(checkCart));
  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      <Header />
      <Routes>
        {/* System panel */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<AllProducts />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route
          path="/category/:category_slug/:category_id"
          element={<CategoryProducts />}
        ></Route>
        <Route path="/products/:tag" element={<TagProducts />}></Route>
        <Route
          path="/product/:product_slug/:product_id"
          element={<ProductDetail />}
        ></Route>
        <Route path="/architects" element={<Architects />}></Route>
        <Route path="/engineers" element={<Engineers />}></Route>
        <Route path="/surveyors" element={<Surveyors />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/confirm-order" element={<ConfirmOrder />}></Route>
        <Route path="/order/success" element={<OrderSuccess />}></Route>
        <Route path="/order/failure" element={<OrderFailure />}></Route>

        {/* Customer panel */}
        <Route path="/customer/register" element={<Register />}></Route>
        <Route path="/customer/login" element={<Login />}></Route>
        <Route path="/customer/logout" element={<CustomerLogout />}></Route>
        <Route path="/customer/dashboard" element={<Dashboard />}></Route>
        <Route path="/customer/orders" element={<Orders />}></Route>
        <Route path="/customer/favorites" element={<Favorites />}></Route>
        <Route path="/customer/profile" element={<Profile />}></Route>
        <Route path="/customer/addresses" element={<AddressList />}></Route>
        <Route path="/customer/add-address" element={<AddAddress />}></Route>
        <Route
          path="/customer/change-password"
          element={<ChangePassword />}
        ></Route>

        {/* Expert panel */}
        <Route path="/expert/register" element={<ExpertRegister />}></Route>
        <Route path="/expert/login" element={<ExpertLogin />}></Route>
        <Route path="/expert/dashboard" element={<ExpertDashboard />}></Route>
        <Route path="/expert/projects" element={<ExpertProjects />}></Route>
        <Route path="/expert/add-project" element={<AddProduct />}></Route>
        <Route path="/expert/orders" element={<ExpertOrders />}></Route>
        <Route path="/expert/clients" element={<Clients />}></Route>
        <Route path="/expert/reports" element={<Reports />}></Route>
        <Route path="/expert/profile" element={<ExpertProfile />}></Route>
        <Route
          path="/expert/change-password"
          element={<ExpertChangePwd />}
        ></Route>
      </Routes>
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
