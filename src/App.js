import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
// import Inventorys from "./Pages/Home/Inventorys/Inventorys";
import AddItems from "./Pages/Home/Additems/AddItems";
import UpdateInventorys from "./Pages/Home/UpdateInventorys/UpdateInventorys";
import ManageProduct from "./Pages/Home/ManageProduct/ManageProduct";
import Login from "./Pages/Home/Login/Login/Login";
import SingUp from "./Pages/Home/Login/SingUp/SingUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Pages/Home/Login/RequirAuth/RequirAuth";
import MyItems from "./Pages/MyItems/MyItems";
import Footer from "./Pages/Shared/Footer/Footer";
import Blogs from "./Pages/Blogs/Blogs";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import About from "./Pages/About/About";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route
          path='/updateInventory'
          element={
            <RequireAuth>
              <UpdateInventorys></UpdateInventorys>
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/myitems'
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/manageProduct'
          element={
            <RequireAuth>
              <ManageProduct></ManageProduct>
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/additems'
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }
        ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
