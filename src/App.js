import React, { Component } from "react";
import Web from "./Web.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import fire from "./Firebase/fire.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return <div>{this.state.person ? <Web /> : <Login />};</div>;
  }
}
export default App;

//  <div className="login">
//     <h1>
//       <span className="font-weight-bold">
//         Thank You for Offering your Time and Guidence
//       </span>
//     </h1>
//     <FormGroup>
//       <Label>Email</Label>
//       <input type="email" placeholder="Email" />
//     </FormGroup>
//     <FormGroup>
//       <Label>Password</Label>
//       <input type="password" placeholder="Password" />
//     </FormGroup>
//     <Button className="btn-lg btn-dark btn-block"> Log In </Button>
//     <div className="text-center pt-3">
//       Or continue with your social account
//     </div>
//     <Facebook className="mt-3 mb-3" />
//     <div className="text-center">
//       <a href="/sign-up">Sign Up</a>
//       <span className="p-2">|</span>
//       <a href="/sign-up">Forgot Password</a>
//     </div>
//   </div>
