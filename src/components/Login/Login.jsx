import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const { user, userLogin, googleSignIn } = useContext(AuthContext);
    console.log(googleSignIn);

  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form)
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        // console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGoogleSignIN = () => {
    // console.log("clicked");
    googleSignIn()
    // console.log(googleSignIn())
      .then((result) => {
        const loggedUser1 = result.user;
        console.log(loggedUser1);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUserLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Don't have an account? Register now
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleGoogleSignIN}  className="btn btn-primary"> Google SignIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
