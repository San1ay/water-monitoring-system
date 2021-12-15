import React, { useContext } from "react";
import { UserContext } from "./userContext";
import Button from "react-bootstrap/Button";

export default function Login() {
  const {
    signInWithGoogle,
    user,
    email,
    setEmail,
    setPass,
    pass,
    firebaseAppAuth,
  } = useContext(UserContext);

  const signin = (e) => {
    firebaseAppAuth
      .signInWithEmailAndPassword(email, pass)
      .then((user) => {})
      .catch((er) => alert(er));
  };

  if (user) window.location.href = "/tests";
  else
    return (
      <form>
        <h3>Login</h3>
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
        <div className="">
          <Button
            variant="loginButtonColor"
            style={{ marginTop: "20px" }}
            onClick={() => {
              signin();
            }}
          >
            Login
          </Button>
          <Button
            variant="googleColor"
            style={{ marginTop: "20px", marginLeft: "30px" }}
            onClick={signInWithGoogle}
          >
            Sign with Google
          </Button>
        </div>
        <p style={{ fontStyle: "bold", textAlign: "right" }}>
          Not registered{" "}
          <a href="/register" style={{ fontWeight: "bold" }}>
            Join us
          </a>
        </p>
      </form>
    );
}
