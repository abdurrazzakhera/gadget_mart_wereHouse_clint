import React from "react";
import { Button } from "react-bootstrap";
import UseItems from "../../../Hooks/UseItems";

const ManageProduct = () => {
  const [items, setItems] = UseItems("");
  let index = 1;

  // item delete Action
  const handleDelete = (id) => {
    console.log(id);
    const url = `https://immense-thicket-83418.herokuapp.com/items/${id}`;
    const confirm = window.confirm("Are you sure Delete Item's");
    if (confirm) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainigItem = items.filter((item) => item._id !== id);
          setItems(remainigItem);
        });
    }
  };
  return (
    <div>
      <div className='text-center'>
        <h1 className='textPrimary py-3'>Manage Your Alls Product</h1>
      </div>
      <div className='w-75 mx-auto'>
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
                  <td>
                    <img src={item.img} className='itemImg' alt='' />
                  </td>
                  <td>{item.name}</td>

                  <td>{item.description}</td>
                  <td>${item.price}</td>
                  <td>{item.supplier}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button
                      className='bgPrimary'
                      onClick={() => handleDelete(item._id)}
                    >
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
