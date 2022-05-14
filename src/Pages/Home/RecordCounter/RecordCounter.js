import React from "react";
import "./RecordCounter.css";

const RecordCounter = () => {
  return (
    <div className='my-5  container counterPage rounded text-center p-3'>
      <h1 className='textPrimary text-uppercase fs-1 fw-bold'>
        Our Statistics
      </h1>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3'>
        <div className='col '>
          <div className='bg-light shadow p-3 mb-5 bg-body rounded'>
            <h1 className='counter'>2015</h1>
            <hr style={{ height: "5px" }} className='rounded-pill line' />
            <p className='text-secondary fs-5'>Pakage Delivery</p>
          </div>
        </div>
        <div className='col '>
          <div className='bg-light shadow p-3 mb-5 bg-body rounded'>
            <h1 className='counter'>1059</h1>
            <hr style={{ height: "5px" }} className='rounded-pill line' />
            <p className='text-secondary fs-5'>Repeat Customar</p>
          </div>
        </div>
        <div className='col '>
          <div className='bg-light shadow p-3 mb-5 bg-body rounded '>
            <h1 className='counter'>213</h1>
            <hr style={{ height: "5px" }} className='rounded-pill line' />
            <p className='text-secondary fs-5'>Our Clints</p>
          </div>
        </div>
        <div className='col'>
          <div className='bg-light shadow p-3 mb-5 bg-body rounded '>
            <h1 className='counter'>10589</h1>
            <hr style={{ height: "5px" }} className='rounded-pill line' />
            <p className='text-secondary fs-5'>Total Product/Goods</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordCounter;
