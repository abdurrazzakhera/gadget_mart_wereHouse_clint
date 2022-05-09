import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
// import Inventorys from "./Pages/Home/Inventorys/Inventorys";
import AddItems from "./Pages/Home/Additems/AddItems";
import UpdateInventorys from "./Pages/Home/UpdateInventorys/UpdateInventorys";
import ManageProduct from "./Pages/Home/ManageProduct/ManageProduct";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route
          path='/updateInventory'
          element={<UpdateInventorys></UpdateInventorys>}
        ></Route>
        <Route
          path='/manageProduct'
          element={<ManageProduct></ManageProduct>}
        ></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
      </Routes>
    </div>
  );
}

export default App;
