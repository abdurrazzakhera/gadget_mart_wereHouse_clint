import { useEffect, useState } from "react";

const UseItems = () => {
  const [items, setItems] = useState([]);
  const [isrelode, setRelode] = useState(false);
  useEffect(() => {
    fetch("https://immense-thicket-83418.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        // console.log(data);
      });
  }, [isrelode]);
  return [items, setItems, isrelode, setRelode];
};

export default UseItems;
