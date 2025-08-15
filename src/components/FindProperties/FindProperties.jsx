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
            style={{ backgroundImage: "url('/22.svg')" }}
          >
            <h4>New York</h4>
            <p>120 Properties</p>
          </div>

          <div
            className="card card2"
            style={{ backgroundImage: "url('/23.svg')" }}
          >
            <h4>Los Angeles</h4>
            <p>98 Properties</p>
          </div>

          <div
            className="card card3"
            style={{ backgroundImage: "url('/24.svg')" }}
          >
            <h4>Chicago</h4>
            <p>87 Properties</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="card-row">
          <div
            className="card card4"
            style={{ backgroundImage: "url('/25.svg')" }}
          >
            <h4>Houston</h4>
            <p>65 Properties</p>
          </div>

          <div
            className="card card5"
            style={{ backgroundImage: "url('/26.svg')" }}
          >
            <h4>Miami</h4>
            <p>74 Properties</p>
          </div>

          <div
            className="card card6"
            style={{ backgroundImage: "url('/27.svg')" }}
          >
            <h4>San Francisco</h4>
            <p>55 Properties</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindProperties;
