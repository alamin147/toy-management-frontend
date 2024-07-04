import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const SingleToy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [singleToy, setSingleToy] = useState([]);
  useEffect(() => {
    fetch(`https://wonder-eight.vercel.app/singleToy/${id}`)
      .then((res) => res.json())
      .then((result) => setSingleToy(result));
  }, [id]);

  const {
    _id,
    sellerName,
    sellerEmail,
    toyCategory,
    toyDetails,
    toyImg,
    toyName,
    toyPrice,
    toyQuantity,
    toyRating,
  } = singleToy;

  document.title = `Wonder Spark toys | ${toyName}`;

  return (
    <>
      <div className="mt-5 bg-light py-5 text-center text-info">
        <h2>{toyName}</h2>
      </div>
      <div className="mt-5 mb-5 container mx-auto d-flex align-items-center justify-content-between gap-5">
        <div>
          <img src={toyImg} alt="" className="img-fluid" />
        </div>
        <div className="p-5 rounded rounded-3 bg-light">
          <p>
            <span className="fw-bold">Price:</span> {toyPrice} taka
          </p>
          <p>
            <span className="fw-bold">Details: </span>
            {toyDetails}
          </p>
          <p>
            <span className="fw-bold">Ratings: </span>
            {toyRating}
          </p>
          <p>
            <span className="fw-bold">Toy Category: </span>
            {toyCategory}
          </p>
          <p>
            <span className="fw-bold">Available: </span>
            {toyQuantity} pieces
          </p>
          <p>
            <span className="fw-bold">Seller Name: </span>
            {sellerName}
          </p>
          <p>
            <span className="fw-bold">Seller Email: </span>
            {sellerEmail}
          </p>
          <Link to="/checkout">
            <button className="btn btn-info text-white">Order now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleToy;
