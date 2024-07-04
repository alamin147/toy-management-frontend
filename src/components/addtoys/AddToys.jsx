import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";

const AddToys = () => {
  document.title = "Wonder Spark toys | Add a Toy";

  const { user, username, useremail } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("coming data from", data);

    fetch("https://wonder-eight.vercel.app/addToys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          toast.success("Toy Added Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };
  return (
    <>
      <h2 className="mt-5 mb-5 bg-light py-5 text-center text-info text-center ">
        Add a Toy
      </h2>
      <div className="container mx-auto">
        <ToastContainer></ToastContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="fw-bold">
            <h4>Toy Name</h4>
          </label>
          <input
            className="mb-4 form-control border border-info rounded rounded-3"
            type="text"
            defaultValue=""
            {...register("toyName", { required: true })}
          />

          <label className="fw-bold">
            <h4>Toy Price</h4>
          </label>
          <input
            className="mb-4 form-control border border-info rounded rounded-3"
            type="text"
            defaultValue=""
            {...register("toyPrice", { required: true })}
          />

          <label className="fw-bold">
            <h4>Toy Picture URL</h4>
          </label>
          <input
            className="mb-4 form-control border border-info rounded rounded-3"
            type="text"
            defaultValue=""
            {...register("toyImg", { required: true })}
          />

          <label className="fw-bold">
            <h4>Toy Rating</h4>
          </label>
          <input
            className="mb-4 form-control border border-info rounded rounded-3"
            type="text"
            defaultValue=""
            {...register("toyRating", { required: true })}
          />

          <label className="fw-bold">
            <h4>Toy Details</h4>
          </label>
          <input
            className="mb-4 form-control border border-info rounded rounded-3"
            type="text"
            defaultValue=""
            {...register("toyDetails", { required: true })}
          />

          <label className="fw-bold">
            <h4>Toy Sub Category</h4>
          </label>
          <input
            className="mb-4 form-control border border-info rounded rounded-3"
            type="text"
            defaultValue=""
            {...register("toyCategory", { required: true })}
          />

          <label className="fw-bold">
            <h4>Toy Available Quantity</h4>
          </label>
          <input
            className="mb-4 form-control border border-info rounded rounded-3"
            type="text"
            defaultValue=""
            {...register("toyQuantity", { required: true })}
          />

          <label className="fw-bold">
            <h4>Seller Name</h4>
          </label>
          <input
            className="mb-4 form-control border border-info rounded rounded-3"
            type="text"
            defaultValue={user?.displayName || username}
            {...register("sellerName", { required: true })}
          />

          <label className="fw-bold">
            <h4>Seller Email</h4>
          </label>
          <input
            className="mb-4 form-control border border-info rounded rounded-3"
            type="email"
            defaultValue={user?.email || useremail}
            {...register("sellerEmail", { required: true })}
          />

          {errors.exampleRequired && <span>This field is required</span>}

          <input
            className="btn btn-info text-white mx-auto mb-5"
            value="Add a Toy"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default AddToys;
