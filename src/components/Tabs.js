import React from "react";
import "./Tabs.css";

export default function Tabs() {
  return (
    <>
      <section className="tabs">
        <div className="container">
          <div id="tab-1" className="tab-item tab-border">
            <i className="fas fa-door-open fa-3x"></i>
            <p className="hide-sm">Cancel anytime</p>
          </div>
          <div id="tab-2" className="tab-item">
            <i className="fas fa-tablet-alt fa-3x"></i>
            <p className="hide-sm">Watch anywhere</p>
          </div>
          <div id="tab-3" className="tab-item">
            <i className="fas fa-tags fa-3x"></i>
            <p className="hide-sm">Pick your price</p>
          </div>
        </div>
      </section>
      <section className="tab-content">
        <div className="container">
          {/* <div id="tab-1-content" className="tab-content-item show">
            <div className="tab-1-content-inner">
              <div>
                <p className="text-lg">
                  If you decide Netflix isn't for you - no problem. No
                  commitment. Cancel online anytime.
                </p>
                <a href="#" className="btn btn-lg">
                  Watch Free For 30 Days
                </a>
              </div>
              <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" />
            </div>
          </div> */}
          <div id="tab-2-content" className="tab-content-item">
            <div className="tab-2-content-top">
              <p className="text-lg">
                Watch TV shows and movies anytime, anywhere — personalized for
                you.
              </p>
              <a href="#" className="btn btn-lg">
                Watch Free For 30 Days
              </a>
            </div>
            <div className="tab-2-content-bottom">
              <div>
                <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" />
                <p>Watch on your TV</p>
                <p className="text-dark">
                  Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                  players and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
