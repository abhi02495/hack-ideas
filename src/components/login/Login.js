import "./login.css";
import React, { useEffect, useState } from "react";
import hackathon_img from "../../common/images-svg/hackathon-img.jpg";
import Hackathon from "../main/Hackathon";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    setUser(userName.toLowerCase());
    localStorage.setItem("user", userName.toString().toLowerCase());
  };

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("user");
    if (userLoggedIn) {
      setUser(userLoggedIn);
    }
  }, []);

  if (user) {
    return <Hackathon user={user} />;
  }

  return (
    <>
      <div className="split-right right">
        <div className="centered">
          <h2 className="heading">HACK IDEAS</h2>
          <p className="para"> Check out the upcoming hackathon events here!!</p>
          <img src={hackathon_img} alt="hackathon" />
        </div>
      </div>

      <div className="split left">
        <div className="centered">
          <div className="form-wrapper">
            <h1 className="signin-h1">Sign In</h1>
            <form onSubmit={onSubmitHandler}>
              <div className="form-item">
                <input
                  type="username"
                  name="username"
                  required
                  placeholder="Employee ID"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="button-panel">
                <input
                  type="submit"
                  className="button"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
