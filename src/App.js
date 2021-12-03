import Header from "./header";
import CarBody from "./car-body";
import Login from "./Login";
import Signup from "./Signup";
import "./App.scss";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/app";
import { useState } from "react";
import { providers, firebaseAppAuth } from "./firebase";
import { UserContext } from "./userContext";
import UserTests from "./userTests";
import Contactus from "./contactus";
import About from "./about";

function App({ signInWithEmailAndPassword, user, signInWithGoogle, signOut }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <UserContext.Provider
      value={{
        signInWithEmailAndPassword,
        signInWithGoogle,
        user,
        email,
        pass,
        setEmail,

        setPass,
        signOut,
        firebase,
        firebaseAppAuth,
      }}
    >
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={user ? <UserTests /> : <CarBody />}
            />
            <Route
              path="/login"
              element={
                <Container style={{ maxWidth: "600px", paddingTop: "40px" }}>
                  <Login className="loginPage" />
                </Container>
              }
            />
            <Route
              path="/register"
              element={
                <Container style={{ maxWidth: "600px", paddingTop: "40px" }}>
                  <Signup className="signupPage" />
                </Container>
              }
            />
            <Route
              path="/about"
              element={
                <Container style={{ maxWidth: "600px", paddingTop: "40px" }}>
                  <About className="signupPage" />
                </Container>
              }
            />{" "}
            <Route
              path="/contactus"
              element={
                <Container style={{ maxWidth: "600px", paddingTop: "40px" }}>
                  <Contactus />
                </Container>
              }
            />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
