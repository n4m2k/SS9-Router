import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import Invoices from "./components/Invoices";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import About from "./components/About";
import ProductDetail from "./components/ProductDetail";
import InvoicesDetail from "./components/InvoicesDetail";
import NavBar from "./components/NavBar";
const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <header>
        <NavBar login={login}></NavBar>
      </header>
      <Routes>
        <Route path="/auth" element={<Auth></Auth>}>
          <Route
            path="login"
            element={<Login login={login} setLogin={setLogin}></Login>}
          ></Route>
          <Route path="register" element={<Register></Register>}></Route>
        </Route>
        <Route path="/home" element={<Home></Home>}>
          <Route path="products" element={<Products></Products>}>
            <Route path=":id" element={<ProductDetail></ProductDetail>}></Route>
          </Route>
          <Route path="invoices" element={<Invoices></Invoices>}>
            <Route
              path=":id"
              element={<InvoicesDetail></InvoicesDetail>}
            ></Route>
          </Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route path="about" element={<About></About>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
