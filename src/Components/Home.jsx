import React from "react";
import "./home.css";
import vid1 from "../assets/vid1.mp4";
import { Link } from "react-scroll";

function Home() {
  return (
    <>
      <div
        id="home"
        className=""
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          marginTop: "48px",
        }}
      >
        <div className="embed-responsive embed-responsive-16by9">
          <video
            className="embed-responsive-item"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            autoPlay
            loop
            muted
            src={vid1}
          ></video>
          <div className="content">
          <button class="button" data-text="Awesome">
            <span class="actual-text">&nbsp;CREATIVE&nbsp;</span>
            <span aria-hidden="true" class="hover-text">
              &nbsp;CREATIVE&nbsp;
            </span>
          </button>
          {/* <p className="write">CREATIVE</p> */}
        </div>
        </div>
      </div>
      {/* <div className="" style={{position: 'relative', overflow: 'hidden', width: '100%', height: '100%'}}>
        <div className="embed-responsive embed-responsive-16by9">
          <video
            className="embed-responsive-item"
            style={{ width: "100%", height: "100vh", objectFit: 'cover'}}
            autoPlay
            loop
            muted
            src={vid1}
          ></video>
        </div>
      </div> */}
    </>
  );
}

export default Home;
