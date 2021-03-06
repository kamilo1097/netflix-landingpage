import React, { useEffect, useState } from "react";
import "./Tabs.css";

export default function Tabs() {
  const [tabObjects, setTabObjects] = useState([
    {
      key: "tab-1",
      number: 1,
      icon: "fas fa-door-open fa-3x",
      pText: "Cancel anytime",
    },
    {
      key: "tab-2",
      number: 2,
      icon: "fas fa-tablet-alt fa-3x",
      pText: "Watch anywhere",
    },
    {
      key: "tab-3",
      number: 3,
      icon: "fas fa-tags fa-3x",
      pText: "Pick your price",
    },
  ]);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [toggleState, setToggleState] = useState(1);

  let checked = "tab-item tab-border";
  let notChecked = "tab-item";
  let contentShow = "tab-content-item show";
  let contentHidden = "tab-content-item";

  //addEventListenerForTabItem();
  return (
    <>
      <section className="tabs">
        <div className="container">
          {tabObjects.map((item, index) => (
            <div
              key={item.key}
              id={item.key}
              className={toggleState === index + 1 ? checked : notChecked}
              onClick={() => toggleTab(index + 1)}
            >
              <i className={item.icon}></i>
              <p className="hide-sm">{item.pText}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="tab-content">
        <div className="container">
          <div
            id="tab-1-content"
            className={toggleState === 1 ? contentShow : contentHidden}
          >
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
          </div>
          <div
            id="tab-2-content"
            className={toggleState === 2 ? contentShow : contentHidden}
          >
            <div className="tab-2-content-top">
              <p className="text-lg">
                Watch TV shows and movies anytime, anywhere ??? personalized for
                you.
              </p>
              <a href="#" className="btn btn-lg">
                Watch Free For 30 Days
              </a>
            </div>
            <div className="tab-2-content-bottom">
              <div>
                <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" />
                <p className="text-md">Watch on your TV</p>
                <p className="text-dark">
                  Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                  players and more.
                </p>
              </div>
              <div>
                <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" />
                <p className="text-md">Watch instantly or download for later</p>
                <p className="text-dark">
                  Available on phone and tablet, wherever you go.
                </p>
              </div>
              <div>
                <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" />
                <p className="text-md">Use any computer</p>
                <p className="text-dark">Watch right on Netflix.com.</p>
              </div>
            </div>
          </div>
          <div
            id="tab-3-content"
            className={toggleState === 3 ? contentShow : contentHidden}
          >
            <div className="text-center">
              <p className="text-lg">
                Choose one plan and watch everything on Netflix
              </p>
              <a href="#" className="btn btn-lg">
                Watch Free For 30 Days
              </a>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly price after free month ends on 6/19/19</td>
                  <td>$8.99</td>
                  <td>$12.99</td>
                  <td>$15.99</td>
                </tr>
                <tr>
                  <td>HD Available</td>
                  <td>
                    <i className="fas fa-times"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Ultra HD Available</td>
                  <td>
                    <i className="fas fa-times"></i>
                  </td>
                  <td>
                    <i className="fas fa-times"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Screens you can watch on at the same time</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Watch on your laptop, TV, phone and tablet</td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Unlimited movies and TV shows</td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>Cancel anytime</td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td>First month free</td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                  <td>
                    <i className="fas fa-check"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
