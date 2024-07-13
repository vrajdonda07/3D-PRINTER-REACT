import React from "react";
import "./loginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
        <div className="mainlogin d-flex justify-content-center">
          <div className="login wrap d-flex justify-content-center align-items-center">
            <div className="h1 w-100 d-flex align-items-center justify-content-center">
              <div>Login</div>
            </div>
            <div className="w-100">
              <div className="d-flex justify-content-center flex-column align-items-center">
                <input
                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                />
                <input
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="password"
                />
              </div>
            </div>
            <div className="w-100">
              <div className="d-flex justify-content-center align-items-center">
                {/* <input value="Login" className="btn" type="submit" /> */}
                <Link to={'/'}><button value="submit" className="btn">Login</button></Link>
              </div>
            </div>
            <div className="w-100 registerNow">
              <div className="d-flex justify-content-center align-items-center">
                <p>Don't have an account?</p>
                <p>
                  <a className="ms-1" href="">
                   <Link to={'/registrationPage'}> Register now{" "}</Link>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default LoginPage;

// <CardGroup>
//           <Card>
//             <img
//               src="./src/assets/loginbg.jpg"
//               width="100%"
//               height="100%"
//             ></img>
//           </Card>
//           <Card>
//             <Card.Body>
//               <Card.Text>
//                 <div className="d-flex flex-column justify-content-center align-items-center">
//                   <Card.Title>Log In</Card.Title>
//                   <div className="form__group field">
//                     <input
//                       type="text"
//                       className="form__field"
//                       placeholder="Name"
//                       required=""
//                     />
//                     <label for="name" className="form__label">
//                       Name
//                     </label>
//                   </div>
//                   <div className="form__group field">
//                     <input
//                       type="password"
//                       className="form__field"
//                       placeholder="Password"
//                       required=""
//                     />
//                     <label for="password" className="form__label">
//                       Password
//                     </label>
//                   </div>
//                 </div>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </CardGroup>
