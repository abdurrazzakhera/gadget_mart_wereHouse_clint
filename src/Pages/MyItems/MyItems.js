import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { Button } from "react-bootstrap";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  let index = 1;

  useEffect(() => {
    const myAddedItems = async () => {
      const email = user.email;
      const url = `https://immense-thicket-83418.herokuapp.com/myitem?email=${email}`;
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    myAddedItems();
  }, []);
  console.log(myItems);

  //
  const handleDelete = (id) => {
    console.log(id);
    const url = `https://immense-thicket-83418.herokuapp.com/items/${id}`;
    const confirm = window.confirm("Are You Want delete you item");
    if (confirm) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainigItem = myItems.filter((item) => item._id !== id);
          setMyItems(remainigItem);
        });
    }
  };
  return (
    <div>
      <div className='text-center'>
        <h1 className='textPrimary py-3'>Manage Your Added Product Only</h1>
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
              {myItems.map((item) => (
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
                <td>{myItems.length}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyItems;
