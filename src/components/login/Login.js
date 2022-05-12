import "./login.css";
import React, { useEffect, useState } from "react";
import hackathon from "../../common/images-svg/hackathon-img.jpg";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    setUser(userName);
    localStorage.setItem("user", userName.toString());
    console.log(userName);
  };

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("user");
    if (userLoggedIn) {
      setUser(userLoggedIn);
    }
  }, []);

  if (user) {
    return <div>{user} is logged in</div>;
  }

  return (
    <>
      <div className="split-right right">
        <div className="centered">
          <h2 className="heading">HACK IDEAS</h2>
          <p> Check out the upcoming hackathon events here!!</p>
          <img src={hackathon} alt="hackathon" />
        </div>
      </div>

      <div className="split left">
        <div className="centered">
          <div className="form-wrapper">
            <h1 className="signin-h1">Sign In</h1>
            <form onSubmit={onSubmitHandler}>
              <div className="form-item">
                <label for="username"></label>
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
                  title="Sign In"
                  value="Sign In"
                  
                ></input>
              </div>
            </form>
          </div>

          {/* <div>
            <input
              type="text"
              value={userName}
              placeholder="Enter Employee ID"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <button variant="contained" onClick={onSubmitHandler} type="submit">
              Login
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
