import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UseItems from "../../../Hooks/UseItems";
import "./UpdateInventorys.css";

const UpdateInventorys = () => {
  const [items, setItems, isrelode, setRelode] = UseItems("");
  const inputRef = useRef("");
  let index = 1;
  const navigate = useNavigate();

  // deliverd an item
  const handelDeliverd = (id) => {
    const products = items.find((item) => item._id == id);
    const stockProduct = parseInt(products?.quantity);
    const newStockProduct = stockProduct - 1;

    // console.log(newStockProduct);
    // console.log(id);
    const url = `https://immense-thicket-83418.herokuapp.com/items/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: newStockProduct }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setRelode(!isrelode);
      });
  };

  //Handel re Stock
  const handelReStock = (id) => {
    const stockInput = inputRef.current.value;
    const newInput = parseInt(stockInput);
    const products = items.find((item) => item._id == id);
    const stockProduct = parseInt(products?.quantity);
    const newStockProduct = stockProduct + newInput;
    console.log(newStockProduct);

    const url = `https://immense-thicket-83418.herokuapp.com/items/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: newStockProduct }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setRelode(!isrelode);
        // setStockInput("");
      });
  };
  return (
    <div>
      <h1>This is update page</h1>
      <div className='w-75 mx-auto'>
        <h2>Manage Your services : {items.length}</h2>
        <div className='table-responsive-md'>
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
                <th scope='col'>add quantity</th>
                <th scope='col'>adding</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id}>
                  <th scope='row'>{index++}</th>
                  <td>
                    <img src={item.img} className='itemImg' alt='' />
                  </td>
                  <td>{item.name}</td>

                  <td>{item.description}</td>
                  <td>${item.price}</td>
                  <td>{item.supplier}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <input
                      className='stockField'
                      ref={inputRef}
                      type='number'
                      name=''
                      id=''
                    />
                  </td>
                  <td>
                    <Button onClick={() => handelReStock(item._id)}>
                      Restock
                    </Button>
                  </td>
                  <td>
                    <Button onClick={() => handelDeliverd(item._id)}>
                      deleverd
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
                <td></td>
                <td></td>
                <td>{items.length}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <h2>
          <Button onClick={() => navigate("/manageProduct")}>
            Manage all Product
          </Button>
        </h2>
      </div>
    </div>
  );
};

export default UpdateInventorys;
