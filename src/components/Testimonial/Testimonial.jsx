

import './Testimonial.css'
const Testimonial = () => {
  return (
    <div className="testimonial-section">
      {/* Left Side - Info */}
      <div className="testimonial-info">
        <h2>
          What our customers are <br /> saying us?
        </h2>
        <p className="description">
          Various versions have evolved over the years, sometimes by <br /> accident,
          sometimes on purpose injected humour and the like.
        </p>

        <div className="stats">
          <div >
            <h3>10m+</h3>
            <p>Happy People</p>
          </div>
          <div>
            <h3>4.88</h3>
            <p>Overall rating</p>
            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Testimonial */}
      <div className="testimonial-card">
        <div className="profile">
          <img src="test1.png.svg" alt="Customer" />
          <div>
            <h3>Cameron Williamson</h3>
            <p className="role">Designer</p>
          </div>
        </div>

        <p className="quote">
          Searches for multiplexes, property comparisons, and the loan estimator.
          Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore.
        </p>

        <div className="nav-buttons">
  <button className="nav-btn">
    <img src="Button (1).svg" alt="Previous" className="btn-icon" />
  </button>
  <button className="nav-btn">
    <img src="Button.svg" alt="Next" className="btn-icon" />
  </button>
</div>

      </div>
    </div>
  );
};

export default Testimonial
