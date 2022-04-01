import React from "react";
import logo from "../assets/images/logo.png";
import NetflixBtn from "./NetflixBtn";
import "./Home.css";
import Tabs from "./Tabs";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <header className="showcase">
        <div className="showcase-top">
          <img src={logo} alt="Netflix" />
          <a href="#" className="btn btn-rounded">
            Sign in
          </a>
        </div>
        <div className="showcase-content">
          <h1>See What's next</h1>
          <p>Watch anywhere. Cancel anywhere</p>
          <NetflixBtn />
        </div>
      </header>
      <Tabs />
      <Footer />
    </>
  );
}
