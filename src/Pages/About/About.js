import React from "react";
import aboutimg from "../../images/newitem/about.jpeg";

const About = () => {
  return (
    <div className='container my-5'>
      <div className=''>
        <div className=' '>
          <img
            className='rounded float-start img-thumbnail p-3'
            src={aboutimg}
            style={{ width: "350px" }}
            alt=''
          />
        </div>
        <div>
          <p className='ps-2'>
            Our Company the process of ordering, storing, using, and selling a
            company's inventory. This includes the management of raw materials,
            components, and finished products, as well as warehousing and
            processing of such items. Inventory management in business refers to
            managing order processing, manufacturing, storage, and selling raw
            materials and finished goods. It ensures the right type of goods
            reach the right place in the right quantity at the right time and at
            the right price. Thus, it maintains the product availability at
            warehouses, retailers, and distributors. If you've ever worked in a
            retail store, inventory management probably gives you flashbacks to
            back storerooms filled with stock being counted by hand. But with
            the rise of ecommerce, inventory management is expanding from
            brick-and-mortar to digital. Managing inventory strategically has
            never been more important, and it only gets more challenging as you
            grow in both product development and units sold. Read on to learn
            how to stay on top of the inventory management process. Keeping
            track of what inventory sells like hotcakes versus what ends up
            covered in metaphorical cobwebs can share some important insight
            about what your customers are — and aren't — into. You can also
            gauge the success of prior promotions or product launches by
            assessing inventory levels before and after those events. Well, kind
            of. Good inventory management lends itself to good inventory
            forecasting, which can help you predict and plan for demand. You can
            leverage past inventory trends on a monthly, seasonal, or SKU-by-SKU
            level to better prepare for future levels of sales and demand. Make
            sure to keep any planned marketing promotions or new product
            launches in mind, too.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
