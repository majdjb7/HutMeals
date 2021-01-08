import React from 'react';
import '../../App.css';
//import Register from './Register.html';

export default function SignUp() {

    return (
      <div class ="container">
  
        <div class="sidenav">
           <div class="login-main-text">
              {/* <h2>Application<br> Login Page</h2> */}
              <h2>Log In Page</h2>
              <p>Login or register from here to access.</p>
          
        </div>
        </div>
  
  <div class="main">
  <div class="col-md-6 col-sm-12">
     <div class="login-form">
        <form>
          <div class="form-group">
            <label>User Name</label>
            <input type="text" class="form-control" placeholder="User Name"></input>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Password"></input>
          </div>
           {/* <div class="form-group">
              <label>User Name</label>
              <input type="text" class="form-control" placeholder="User Name">
           </div> */}
           {/* <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Password">
           </div> */}
           <button type="submit" class="btn btn-primary">Login</button>
           <button type="submit" class="btn btn-secondary">Register</button>
        </form>
     </div>
  </div>
  </div>
  </div>
  
    );
}

//export default HelloWorld;

/*
export default function SignUp() {
  return (
    <h1 classNameName='sign-up'>Sign Up Here</h1>
  );
}
*/