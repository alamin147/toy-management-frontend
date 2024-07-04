import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  document.title = "Wonder Spark toys | All Toys";

  const [allShopToys, setAllShopToys] = useState([]);

  useEffect(() => {
    fetch("https://wonder-eight.vercel.app/allToysShop")
      .then((res) => res.json())
      .then((result) => setAllShopToys(result));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;
    form.reset();
    fetch(`https://wonder-eight.vercel.app/allToysShop/${search}`)
      .then((res) => res.json())
      .then((result) => setAllShopToys(result));
  };

  return (
    <>
      <h2 className="mt-5 mb-5 bg-light py-5 text-center text-info text-center ">
        All Toys
      </h2>
      <div className="container mt-5 mx-auto">
        <form
          onSubmit={handleSearch}
          className="d-flex gap-3 align-items-center justify-content-center"
        >
          <input
            name="search"
            className="border border-info rounded rounded-4 py-2 px-3"
            type="text"
          />
          <input
            className="btn btn-info py-2 px-3 text-white"
            type="submit"
            value="Search"
          />
        </form>
      </div>
      <div className="mt-5 container mx-auto">
        {/* <h3>alll toys</h3> */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Seller</th>
              <th scope="col">Toy Name</th>
              <th scope="col">Category</th>
              <th scope="col">Available</th>
              <th scope="col">Price</th>
              <th scope="col">View Details</th>
            </tr>
          </thead>
          <tbody>
            {allShopToys.map((toy, i) => {
              return (
                <tr key={toy._id}>
                  <td>{i + 1}</td>
                  <td>{toy.sellerName}</td>
                  <td>{toy.toyName}</td>
                  <td>{toy.toyCategory}</td>
                  <td>{toy.toyQuantity}</td>
                  <td>{toy.toyPrice}</td>
                  <td>
                    <Link to={`/viewSingleToy/${toy._id}`}>
                      <button className="btn btn-info text-white">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;
