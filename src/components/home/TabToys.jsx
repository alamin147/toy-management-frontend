import React from "react";
import { Link } from "react-router-dom";

const TabToys = ({ toys }) => {
  console.log("toys page", toys);
  const { _id, toyImg, toyName, toyPrice, toyRating } = toys;
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={toyImg} className="card-img-top" alt="..." />

          <div className="card-body">
            <h3 className="card-title">{toyName}</h3>
            <p className="fw-bold card-title">Price: {toyPrice}</p>
            <p className="card-title">Rating: {toyRating}</p>
            <Link to={`/viewSingleToy/${_id}`}>
              <button className="btn btn-info text-white">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabToys;
