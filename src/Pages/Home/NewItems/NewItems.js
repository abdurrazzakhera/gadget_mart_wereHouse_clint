import React from "react";
import NewItem from "../NewItem/NewItem";
import img1 from "../../../images/newitem/n1.jpg";
import img2 from "../../../images/newitem/n2.jpg";
import img3 from "../../../images/newitem/n3.jpg";
import { Row } from "react-bootstrap";
import "./NewItems.css";

const NewItems = () => {
  const newItems = [
    {
      _id: 1,
      name: "Google Pixel Watch",
      dec: "During its Google I/O conference this year, the company officially confirmed that it's working on a smartwatch and will be released within a couple of months. However, the tech giant wasn't very vocal about details, so we are left with a lot of questions.",
      img: img1,
    },
    {
      _id: 1,
      name: "Realme TechLife Watch SZ100",
      dec: "Realme hasn't divulged the Watch SZ100's pricing yet, but the company revealed a few features of the smartwatch, including a 1.69' color display, skin and body temperature monitoring, and heart rate sensor.Realme is the Watch SZ100 with ",
      img: img2,
    },
    {
      _id: 1,
      name: "Realme 9 and 9 5G ",
      dec: "The EU Realme 9 5G gets a Qualcomm Snapdragon 695 instead of the Dimensity 810 used on the India version. Another difference comes in the slightly larger 6.6-inch LCD which also boasts a faster 120Hz refresh rate.",
      img: img3,
    },
  ];
  return (
    <div className='container newItemsCustom rounded p-2 '>
      <div className='text-center'>
        <h1 className='textPrimary py-3 text-uppercase'>Latest Added Item</h1>
      </div>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {newItems.map((newItem) => (
          <NewItem key={newItem._id} newItem={newItem}></NewItem>
        ))}
      </Row>
    </div>
  );
};

export default NewItems;
