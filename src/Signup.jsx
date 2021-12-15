import React, { useContext, useState } from "react";
import { UserContext } from "./userContext";
import Button from "react-bootstrap/Button";

export default function SignUp() {
  const {
    backURL,
    axios,
    user,
    email,
    setEmail,
    setPass,
    pass,
    firebaseAppAuth,
    signInWithGoogle,
  } = useContext(UserContext);

  const [userData, setUserData] = useState({});
  const signup = (e) => {
    firebaseAppAuth
      .createUserWithEmailAndPassword(email, pass)
      .then((user) => {
        axios.post(backURL + "/user/register", {
          userID: user.user.uid,
          email,
          userData,
        });
      })
      .catch((er) => console.log(er));
  };

  if (user) window.location.href = "/tests";
  else
    return (
      <form>
        <h3>Join us</h3>
        <div className="name-group">
          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              value={userData?.fname}
              onChange={(e) => {
                setUserData((prevState) => ({
                  ...prevState,
                  fname: e.target.value,
                }));
              }}
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              value={userData.lname}
              onChange={(e) => setUserData({ ...userData, lname: e.target.value })}
              className="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="loc-group">
          <div>
            <label>Location</label>
            <input
              type="text"
              value={userData.loc}
              onChange={(e) => setUserData({ ...userData, loc: e.target.value })}
              className="form-control"
              placeholder="Enter your Address"
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              value={userData.age}
              onChange={(e) => setUserData({ ...userData, age: e.target.value })}
              className="form-control"
              placeholder="Your Age"
            />
          </div>
        </div>
        <Button variant="signupButtonColor" style={{ marginTop: "20px" }} onClick={signup}>
          Signup
        </Button>
        <Button
          variant="googleColor"
          style={{ marginLeft: "30px", marginTop: "20px" }}
          onClick={signInWithGoogle}
        >
          SignUp with Google
        </Button>
        <p style={{ fontStyle: "bold", textAlign: "right" }}>
          Already registered{" "}
          <a href="/login" style={{ fontWeight: "bold" }}>
            log in?
          </a>
        </p>
      </form>
    );
}
