import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./create.css";

const Create = ({ showModal, handleClose }) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="maincreate w-100 h-100 d-flex justify-content-center">
            <div className="create w-100 h-100 wrap d-flex justify-content-center align-items-center">
              <div className="d-flex w-100 h-100 align-items-center justify-content-center">
                <div className="d-flex colPosition w-100 h-100">
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
                      id="file"
                      name="file"
                      type="file"
                      accept=".pdf, .jpeg, .png, .jpg"
                    />
                    {/* <label for='file' className="chooseLabel">File/img</label> */}

                    {/* <input
                      placeholder="Confirm password"
                      id="cpassword"
                      name="cpassword"
                      type="password"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className="btnCreate">
            Close
          </button>
          <input value="Create" className="btnCreate" type="submit" />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Create;
