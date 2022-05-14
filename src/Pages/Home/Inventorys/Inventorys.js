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
    <div className=' container mx-auto mt-3'>
      <div className='table-responsive-md w-100 '>
        <table className=' table table-bordered table-hover table-striped'>
          <thead>
            <tr>
              <th className='indexNumber' scope='col'>
                #
              </th>
              <th scope='col'>Picture</th>
              <th scope='col'>Services Name</th>

              <th scope='col'>Dec</th>
              <th scope='col'>Price</th>
              <th scope='col'>Suplier</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {items
              .map((item) => (
                <tr key={item._id}>
                  <td>{index++}</td>
                  <td>
                    <img src={item.img} className='itemImg' alt='' />
                  </td>
                  <td>{item.name}</td>

                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.supplier}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button
                      className='bgPrimary'
                      onClick={() => navigate("/updateInventory")}
                    >
                      Update
                    </Button>
                  </td>
                </tr>
              ))
              .slice(0, 6)}
          </tbody>
          {/* <tfoot>
            <tr>
              <th scope='row'></th>
              <td>Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{items.length}</td>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};

export default Inventorys;
