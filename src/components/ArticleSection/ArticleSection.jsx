import React from "react";
import "./ArticleSection.css";

const articles = [
  {
    id: 1,
    image: "33.svg", // Replace with actual image
    category: "Apartment",
    date: "March 19, 2024",
    title: "Housing Markets That Changed the Most ",
  },
  {
    id: 2,
    image: "37.svg",
    category: "Apartment",
    date: "March 19, 2024",
    title: "Read Unveils the Best Canadian Cities for Biking",
  },
  {
    id: 3,
    image: "41.png",
    category: "Office",
    date: "March 19, 2024",
    title: "10 Walkable Cities Where You Can Live Affordably",
  },
  {
    id: 4,
    image: "45.svg",
    category: "Shop",
    date: "March 19, 2024",
    title: "New Apartment Nice in the Best Canadian Cities",
  },
];

const ArticlesSection = () => {
  return (
    <section className="articles-section">
      <h2 className="section-title">Recent Articles & News</h2>
      <p className="section-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="articles-grid">
        {articles.map((article) => (
          <div className="article-card" key={article.id}>
            <img src={article.image} alt={article.title} className="article-img" />
            <div className="article-info">
              <span className="article-meta">
                {article.category} • {article.date}
              </span>
              <h3 className="article-title">{article.title}</h3>
              <a href="/" className="read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
