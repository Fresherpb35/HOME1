import React, { useState } from 'react';
import './Add-property.css'; 
import Footer from '../components/Footer/Footer';

const AddPropertyForm = () => {
  const [floorPlan, setFloorPlan] = useState(null); // State for selected image

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFloorPlan(URL.createObjectURL(file)); // Preview image
    }
  };

  return (
    <div>
      <h2 className="heading">List your property</h2>

      <div className='btn'>
        <div className='info'>
          <p className='basic-info'>Basic Info</p>
        </div>
        <div className='photos'>
          <p className='photos-btn'>Photos</p>
        </div>
      </div>

      <div className="container">
        <form className="form">
          <div>
            <label className="label">Floor Name</label>
            <input type="text" className="input" />
            <p className="input-info">Example:Ground Floor</p>
          </div>

          <div>
            <label className="label">Description</label>
            <textarea className="input" />
          </div>

          <div>
            <label className="label">Floor Price <span className="text-gray">(Only digits)</span></label>
            <input type="number" className="input" />
            <p className="input-info">Example:4000</p>
          </div>

          <div>
            <label className="label">Price Postfix</label>
            <input type="text" className="input" />
            <p className="input-info">Example:Per Month or Per Night</p>
          </div>

          <div>
            <label className="label">Floor Size <span className="text-gray">(Only digits)</span></label>
            <input type="number" className="input" />
            <p className="input-info">Example:5000</p>
          </div>

          <div>
            <label className="label">Size Postfix</label>
            <input type="text" className="input" />
            <p className="input-info">Example: "sq ft", "sq m".</p>
          </div>

          <div>
            <label className="label">Bedrooms</label>
            <input type="number" className="input" />
            <p className="input-info">Example:4</p>
          </div>

          <div>
            <label className="label">Bathrooms</label>
            <input type="number" className="input" />
            <p className="input-info">Example:2</p>
          </div>

          {/* Floor Plan Image with Select button functionality */}
          <div>
            <label className="label">Floor Plan Image</label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              
              {/* Hidden file input */}
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="floor-plan-input"
                onChange={handleFileSelect}
              />

              {/* Select button triggers hidden input */}
              <button
                type="button"
                className="button-secondary"
                onClick={() => document.getElementById('floor-plan-input').click()}
              >
                Select
              </button>

              {/* Image preview */}
              {floorPlan && (
                <img
                  src={floorPlan}
                  alt="Floor Plan Preview"
                  style={{ width: '150px', border: '1px solid #ccc', borderRadius: '8px' }}
                />
              )}
            </div>
            <p className="image-info">The recommended minimum width is 770px and height is flexible.</p>
            <p className="input-info">Upload a floor plan image</p>
          </div>

          <div>
            <button type="button" className="button">+ Add more</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default AddPropertyForm;
