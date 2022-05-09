import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UseItems from "../../../Hooks/UseItems";
import "./Inventorys.css";

const Inventorys = () => {
  const [items] = UseItems("");
  let index = 1;
  const navigate = useNavigate();
  return (
    <div className='w-75 mx-auto'>
      <h2>Manage Your services : {items.length}</h2>
      <table className=' table table-bordered table-hover table-striped'>
        <thead>
          <tr>
            <th className='indexNumber' scope='col'>
              #
            </th>
            <th scope='col'>Services Name</th>
            <th scope='col'>Picture</th>

            <th scope='col'>Dec</th>
            <th scope='col'>Price</th>
            <th scope='col'>Suplier</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <th scope='row'>{index++}</th>
              <td>{item.img}</td>
              <td>{item.name}</td>

              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.supplier}</td>
              <td>{item.quantity}</td>
              <td>
                <Button onClick={() => navigate("/updateInventory")}>
                  Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{items.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Inventorys;
