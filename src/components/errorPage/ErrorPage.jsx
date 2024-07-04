import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto text-center">
      <div className="mt-5">
        <h2>Page Not Found</h2>
        <Link to="/">
          <button className="mt-3 btn btn-info text-white">
            Go Back to home page
          </button>
        </Link>
      </div>
      <img
        className="img-fluid"
        src="https://as2.ftcdn.net/v2/jpg/01/19/93/87/1000_F_119938711_est0cXYS2O0phfS8VJiA6ZkHz0yve3X9.jpg"
        alt=""
      />
    </div>
  );
};

export default ErrorPage;
