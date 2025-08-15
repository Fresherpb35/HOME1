import React from "react";
import "./Luxury.css";

const Luxury = () => {
  return (
    <div className="luxury-container">
      <div className="luxury-content">
        {/* Left Image Section */}
        <div className="image-section">
          <img src="h11.png.svg" alt="Luxury Home" className="main-image" />

          {/* Overlay Card */}
              <img src="25.png" alt="icon" />
    
           
        </div>

        {/* Text Section */}
        <div className="text-section">
          <h2>
            Local expertise for <br /> luxury homes
          </h2>
          <p>
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc
            egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium.
            Mi mauris nulla ac dictum ut mauris non.
          </p>
          <button className="learn-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats">
        <div>
          <h3>$18M</h3>
          <p>Owned from properties transactions</p>
        </div>
        <div>
          <h3>26K</h3>
          <p>Properties for Buy</p>
        </div>
        <div>
          <h3>15K</h3>
          <p>Properties for Sell</p>
        </div>
        <div>
          <h3>800</h3>
          <p>Daily completed transactions.</p>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
