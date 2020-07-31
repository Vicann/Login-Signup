import React from "react";
import fire from "./Firebase/fire";
import Facebook from "./Components/Facebook";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import SignUp from "./Signup.js";

const Underline = {
  textDecorationLine: "underline",
};

const Box1 = {};

const Box2 = {};

class Login extends React.Component {
  constructor(props) {
    super(props);
    //this.SignUp = this.SignUp.bind(this);
  }
  login() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("You are Logged in");
      })
      .catch((err) => {
        console.log("Sorry there is an Error:" + err.toString());
      });
  }
  signup() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("You are Signed Up");
      })
      .catch((err) => {
        console.log("Sorry there is an Error:" + err.toString());
      });
  }

  //   signup() {
  //     const email = document.querySelector("#email").nodeValue;
  //     const password = document.querySelector("#password").nodeValue;
  //     fire
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then((people) => {
  //         console.log("You are Signed Up");
  //       })
  //       .catch((err) => {
  //         console.log("Sorry there is an Error:" + err.toString());
  //       });
  //   }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          backgroundColor: "lightgrey",
          //width: "100px",
          height: "1000px",
        }}
      >
        <div>
          <div id="fb-root"></div>
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0"
            nonce="T4fra6fK"
          ></script>
          <h1 style={Underline}>
            Thank You for Offering your Time and Guidence.
          </h1>
          <div>Email</div>
          <input style={Box1} id="email" placeholder=" Email" type="text" />
        </div>
        <div>
          <div>Password</div>
          <input
            style={Box2}
            id="password"
            placeholder=" Password"
            type="text"
          />
        </div>
        <button
          style={{ margin: "10px", borderRadius: "12px" }}
          onClick={this.web}
        >
          Login
        </button>
        <button
          style={{ margin: "10px", borderRadius: "12px" }}
          onClick={this.signup}
        >
          SignUp
        </button>
        <div
          class="fb-login-button"
          data-size="medium"
          data-button-type="continue_with"
          data-layout="rounded"
          data-auto-logout-link="false"
          data-use-continue-as="false"
          data-width=""
        ></div>
        <Facebook className="mt-3 mb-3" />
      </div>
    );
  }
}

export default Login;

/* <Button variant="btn btn-success" onClick={() => history.push('/Products')}>Click button to view products</Button>
<button style={{ margin: "10px" }} onClick={this.login}>
    Login
<button style={{ margin: "10px" }} onClick={this.signup}>
    Sign up */
