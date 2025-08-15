import React, { useState } from "react";
import "./TabList.css";

const TabList = () => {
  const [activeTab, setActiveTab] = useState("Real Estate");

  // Content for each tab (example)
  const tabContent = {
    "Real Estate": [
      ["Real Estate NY", "Real Estate Brooklyn", "Real Estate Queens", "Real Estate The Bronx", "Real Estate Staten", "Real Estate Jersey"],
      ["Real Estate Downey", "Real Estate Torrance", "Real Estate Pomona", "Real Estate Glendale", "Real Estate Inglewood", "Real Estate Chicago"],
      ["Real Estate Kane", "Real Estate Lake", "Real Estate Will", "Real Estate DuPage", "Real Estate Miami", "Real Estate Calhoun"],
      ["Real Estate Citrus", "Real Estate Clay", "Real Estate Collier", "Real Estate Columbia", "Real Estate DeSoto", "Real Estate Dixie"],
      ["Real Estate Kane", "Real Estate Lake", "Real Estate Will", "Real Estate DuPage", "Real Estate Miami", "Real Estate Calhoun"]
    ],
    "New Homes": [
      ["New Home 1", "New Home 2", "New Home 3"],
      ["New Home 4", "New Home 5", "New Home 6"],
       ["New Home 1", "New Home 2", "New Home 3"],["New Home 1", "New Home 2", "New Home 3"],
        ["New Home 1", "New Home 2", "New Home 3"],
    ],
    "Popular Area": [
      ["Area 1", "Area 2", "Area 3"],
      ["Area 4", "Area 5", "Area 6"],      ["Area 1", "Area 2", "Area 3"],
      ["Area 4", "Area 5", "Area 6"],      ["Area 1", "Area 2", "Area 3"],
      ["Area 4", "Area 5", "Area 6"]
    ],
    "Popular Searches": [
      ["Search 1", "Search 2"],
      ["Search 3", "Search 4"],
         ["Search 1", "Search 2"],
      ["Search 3", "Search 4"],   ["Search 1", "Search 2"],
      ["Search 3", "Search 4"],   ["Search 1", "Search 2"],
      ["Search 3", "Search 4"]
    ]
  };

  return (
    <div>
      {/* Tab List */}
      <div className="tabs">
        {Object.keys(tabContent).map((tab) => (
          <span
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Tab Content */}
      <div className="content">
        {tabContent[activeTab].map((column, idx) => (
          <div key={idx}>
            {column.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabList;
