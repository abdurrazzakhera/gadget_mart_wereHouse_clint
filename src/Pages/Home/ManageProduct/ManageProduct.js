import React from "react";
import { Button } from "react-bootstrap";
import UseItems from "../../../Hooks/UseItems";

const ManageProduct = () => {
  const [items, setItems] = UseItems("");
  let index = 1;

  // item delete Action
  const handleDelete = (id) => {
    console.log(id);
    const url = `http://localhost:5000/items/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remainigItem = items.filter((item) => item._id !== id);
        setItems(remainigItem);
      });
  };
  return (
    <div>
      <h2>This Page is Manage Product page</h2>
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
                    <Button onClick={() => handleDelete(item._id)}>
                      Delete
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
      </div>
    </div>
  );
};

export default ManageProduct;
