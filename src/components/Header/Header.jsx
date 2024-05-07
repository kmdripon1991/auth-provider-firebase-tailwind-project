import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Home from "../Home/Home";

const Header = () => {
  const { user, logOut, googleSignIn } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error.message));
  };
  return (
    <nav className="navbar bg-success text-primary-content flex justify-between">
      <button className="btn btn-ghost text-xl">authProvider</button>
      <div className="gap-5">
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>
        <Link to="/orders" className="btn btn-ghost">
          Orders
        </Link>

        {user ? (
          <>
            <Link to="/profile" className="btn btn-ghost">
              Profile
            </Link>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-ghost">
              SignOut
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-ghost">
              LogIn
            </Link>
            <Link to="/register" className="btn btn-ghost">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;


