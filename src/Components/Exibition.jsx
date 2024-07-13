import React from "react";
import styles from "./Exibition.module.css";
import "./exibition.css";

function Exibition() {
  return (
    <>
      <div className="mt-5" id="exibition">
        <div className="d-flex justify-content-around">
          <div class="exibitionCard mt-3">
            <div class="sub-card category">
              <span class="text_span">
                <h5>Exibition</h5>
              </span>
            </div>
            <div class="card_container">
              <img
                src="./src/assets/e1.webp"
                className="exibitionImage w-100 h-100"
              ></img>
            </div>
            <div class="sub-card named">
              <span class="text_span">General Purpose</span>
            </div>
          </div>
          <div class="exibitionCard mt-3">
            <div class="sub-card category">
              <span class="text_span">
                <h5>Exibition</h5>
              </span>
            </div>
            <div class="card_container">
              <img
                src="./src/assets/e2.webp"
                className="exibitionImage w-100 h-100"
              ></img>
            </div>
            <div class="sub-card named">
              <span class="text_span">Engineering Resins</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div class="exibitionCard mt-3">
            <div class="sub-card category">
              <span class="text_span">
                <h5>Exibition</h5>
              </span>
            </div>
            <div class="card_container">
              <img
                src="./src/assets/e3.webp"
                className="exibitionImage w-100 h-100"
              ></img>
            </div>
            <div class="sub-card named">
              <span class="text_span">Dental Resins</span>
            </div>
          </div>

          <div class="exibitionCard mt-3">
            <div class="sub-card category">
              <span class="text_span">
                <h5>Exibition</h5>
              </span>
            </div>
            <div class="card_container">
              <img
                src="./src/assets/e4.webp"
                className="exibitionImage w-100 h-100"
              ></img>
            </div>
            <div class="sub-card named">
              <span class="text_span">Jewelry Resins</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exibition;
