import React from 'react';
import './FindProperties.css';

const FindProperties = () => {
  return (
    <div className="FindProp">
      <h2>Find Properties in These Cities</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="card-wrapper">
        {/* Top Row */}
        <div className="card-row">
          <div
            className="card card1"
            style={{ backgroundImage: "url('/14.png')" }}
          ></div>

          <div
            className="card card2"
            style={{ backgroundImage: "url('/15.png')" }}
          ></div>

          <div
            className="card card3"
            style={{ backgroundImage: "url('/16.png')" }}
          ></div>
        </div>

        {/* Bottom Row */}
        <div className="card-row">
          <div
            className="card card4"
            style={{ backgroundImage: "url('/17.png')" }}
          ></div>

          <div
            className="card card5"
            style={{ backgroundImage: "url('/18.png')" }}
          >
            <div className="overlay"></div>
          </div>

          <div
            className="card card6"
            style={{ backgroundImage: "url('/19.png')" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FindProperties;
