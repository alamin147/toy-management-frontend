import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  document.title = "Wonder Spark toys | Login";

  const { signIn, setUser, auth } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const Gprovider = new GoogleAuthProvider();

  const googleLogin = () => {
    signInWithPopup(auth, Gprovider)
      .then((result) => {
        const newUser = result.user;
        console.log("google user", newUser);
        setUser(newUser);
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password === "" || email === "") {
      setError("Field cannot be empty");
      return;
    }

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const User = result.user;
        console.log(User);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("Invalid user");
      });
  };

  return (
    <>
      <div>
        <h2 className="mt-5 mb-5 bg-light py-5 text-center text-info text-center ">
          Login
        </h2>
      </div>
      <div className="container">
        {error ? <h6>{error}</h6> : <></>}
        <form className="container w-50 mx-auto" onSubmit={handleLogin}>
          <label className="form-label">
            <h4>Email</h4>
          </label>
          <br />
          <input
            name="email"
            className="mb-3 form-control border border-info rounded rounded-3"
            type="email"
          />
          <br />

          <label className="form-label">
            <h4>Password</h4>
          </label>
          <br />
          <input
            name="password"
            className="mb-3 form-control border border-info rounded rounded-3"
            type="password"
          />
          <input
            type="submit"
            value="Login"
            className="btn btn-info mt-3 text-white"
          />
          <br />
        </form>
        <div className="container mt-4 w-50 mx-auto">
          <button
            className="btn btn-info text-white mb-3"
            onClick={googleLogin}
          >
            Login with Google
          </button>
          <p className="">
            Don't have Account?{" "}
            <span>
              {" "}
              <Link to="/register" className="btn-info">
                Register
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
