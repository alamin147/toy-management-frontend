import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateToys = () => {
  const toy = useLoaderData();
  const { _id, toyDetails, toyPrice, toyQuantity } = toy;

  document.title = "Wonder Spark toys | Update Toy";

  const location = useLocation();
  const navigate = useNavigate();

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyPrice = form.toyPrice.value;
    const toyQuantity = form.toyQuantity.value;
    const toyDetails = form.toyDetails.value;
    const updatedToy = { toyPrice, toyQuantity, toyDetails };

    fetch(`https://wonder-eight.vercel.app/updateToys/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount > 0) {
          toast.success("Toy Updated Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };

  return (
    <>
      <div>
        <h2 className="mt-5 mb-5 bg-light py-5 text-center text-info text-center ">
          Update a Toy
        </h2>
      </div>
      <div className="mx-auto container">
        <ToastContainer></ToastContainer>
        <form onSubmit={handleUpdateToy} className="container mx-auto">
          <label className="form-label">
            <h4>Toy Price</h4>
          </label>
          <br />
          <input
            name="toyPrice"
            className="mb-4 form-control border border-info rounded rounded-3"
            defaultValue={toyPrice}
            type="text"
          />
          <br />

          <label className="form-label">
            <h4>Toy Quantity</h4>
          </label>
          <br />
          <input
            name="toyQuantity"
            className="mb-4 form-control border border-info rounded rounded-3"
            defaultValue={toyQuantity}
            type="text"
          />
          <br />

          <label className="form-label">
            <h4>Toy Details</h4>
          </label>
          <br />
          <input
            name="toyDetails"
            className="mb-4 form-control border border-info rounded rounded-3 py-2"
            defaultValue={toyDetails}
            type="text"
          />
          <br />

          <input
            type="submit"
            className="btn btn-info text-white mb-4"
            value="Update a Toy"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateToys;
