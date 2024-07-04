import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  document.title = "Wonder Spark toys | Register";

  const { setUserphoto, setUsername, createUser, setUser, setUseremail } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (password.length < 8) {
      setError("Must provide more than 8 Character");
      return;
    } else if (email && password) {
      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          setUser(createdUser);
          setUsername(name);
          setUserphoto(photo);
          setUseremail(email);
          setError("");
          toast.success("Register Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div>
        {" "}
        <h2 className="mt-5 mb-5 bg-light py-5 text-center text-info text-center ">
          Register
        </h2>
      </div>
      <div className="container w-50 mx-auto p-5">
        <ToastContainer></ToastContainer>
        <div>
          {error ? (
            <p className="text-danger">
              Less than eight character password is not allowed
            </p>
          ) : (
            <p>{""}</p>
          )}
        </div>
        <form onSubmit={handleRegister}>
          <label className="form-label">
            <h4>Name</h4>
          </label>
          <br />
          <input
            name="name"
            required
            className="mb-4 form-control border border-info rounded rounded-3"
            type="text"
          />
          <br />

          <label className="form-label">
            <h4>Email</h4>
          </label>
          <br />
          <input
            name="email"
            required
            className="mb-4 form-control border border-info rounded rounded-3"
            type="email"
          />
          <br />
          <label className="form-label">
            <h4>Password</h4>
          </label>
          <br />
          <input
            name="password"
            required
            className="mb-4 form-control border border-info rounded rounded-3"
            type="password"
          />
          <br />
          <label className="form-label">
            <h4>Photo URL</h4>
          </label>
          <br />
          <input
            name="photo"
            required
            className="mb-4 form-control border border-info rounded rounded-3"
            type="text"
          />
          <br />
          <input
            type="submit"
            value="Register"
            className="btn btn-info text-white"
          />
        </form>
        <br />
        <p>
          Already registered?{" "}
          <span>
            {" "}
            <Link to="/login" className="btn-info">
              Login
            </Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default Register;
