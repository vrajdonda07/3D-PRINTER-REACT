import React from "react";
import "./registrationPage.css";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <>
      <div className="mainRegistration d-flex justify-content-center">
        <div className="registration wrap d-flex justify-content-center align-items-center">
          <div className="h1 w-100 d-flex align-items-center justify-content-center">
            <div>Registration</div>
          </div>
          <div className="d-flex w-100 align-items-center justify-content-center">
            <div className="d-flex colPosition">
              <div className="col-12 col-md-6 inputBody">
                <input
                  placeholder="Full name"
                  id="name"
                  name="name"
                  type="text"
                />
                {/* <textarea name="message" rows="3" cols="" placeholder="Address" id="address">The cat was playing in the garden.</textarea> */}
                <input
                  placeholder="Address"
                  id="address"
                  name="address"
                  type="text"
                />
                <input
                  pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
              <div className="col-12 col-md-6 inputBody">
                <input
                  placeholder="Mobile number"
                  id="number"
                  name="number"
                  type="tel"
                />
                <input
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="password"
                />

                <input
                  placeholder="Confirm password"
                  id="cpassword"
                  name="cpassword"
                  type="password"
                />
              </div>
            </div>
          </div>
          <div className="w-100">
            <div className="d-flex justify-content-center align-items-center">
              {/* <input value="Register" className="btnRegister" type="submit">
                <Link to={"/loginPage"}></Link>
              </input> */}
              <Link to={'/loginPage'}><button value="submit" className="btnRegister">Register</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
