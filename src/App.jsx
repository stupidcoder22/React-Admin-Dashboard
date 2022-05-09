import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserList from "./pages/Userlist/Userlist";
import User from "./pages/User/User";
import NewUser from "./pages/Newuser/Newuser";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/Newproduct/Newproduct";
import ProductList from "./pages/Productlist/Productlist";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="user" element={<UserList />} />
            <Route path="user/:id" element={<User />} />
            <Route path="newuser" element={<NewUser />} />
            <Route path="products" element={<ProductList />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="newproduct" element={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
