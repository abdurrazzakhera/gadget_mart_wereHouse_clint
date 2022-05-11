import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState("");

  useEffect(() => {
    const myAddedItems = async () => {
      const email = user.email;
      const url = `https://immense-thicket-83418.herokuapp.com/myitem?email=${email}`;
      const { data } = await axios.get(url);
      setMyItems(data);
    };
    myAddedItems();
  }, []);
  return (
    <div>
      <h1>my added item is : {myItems.length}</h1>
    </div>
  );
};

export default MyItems;
