import React, { useContext } from "react";
import { UserContext } from "./userContext";
import Button from "react-bootstrap/Button";

export default function SignUp() {
  const {
    user,
    email,
    setEmail,
    setPass,
    pass,
    firebaseAppAuth,
    signInWithGoogle,
  } = useContext(UserContext);

  const signup = (e) => {
    firebaseAppAuth
      .createUserWithEmailAndPassword(email, pass)
      .then((user) => {
        // setIsLoggedIn(true);
      })
      .catch((er) => alert(er));
  };

  if (user) window.location.href = "/";
  else
    return (
      <form>
        <h3>Join us</h3>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
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
        <Button
          variant="success"
          style={{ backgroundColor: "green", marginTop: "20px" }}
          onClick={signup}
        >
          Signup
        </Button>
        <Button
          variant="googlecolor"
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
