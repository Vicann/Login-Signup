import React from "react";
import fire from "./Firebase/fire";
import Login from "./Login.js";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.Login = this.Login.bind(this);
  }
  signup() {
    const email = document.querySelector("#email").nodeValue;
    const password = document.querySelector("#password").nodeValue;
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
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <h1>Thank You for Offering your Time and Guidence</h1>
          <div>Email</div>
          <input id="email" placeholder=" Email" type="text" />
        </div>
        <div>
          <div>Password</div>
          <input id="password" placeholder=" Password" type="text" />
        </div>
        <div>Re-enter Password</div>
        <input id="Re-Enter Password" placeholder="Password" type="text" />
        <button style={{ margin: "10px" }} onClick={this.Login}>
          SignUp
        </button>
      </div>
    );
  }
}

export default Login;
