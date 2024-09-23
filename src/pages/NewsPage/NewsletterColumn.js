import React from "react";
import './NewsletterColumn.css';

const NewsletterColumn = () => {
  const newsletters = [
    {
      title: "January 2024",
      link: "/newsletter/january",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
    {
      title: "February 2024",
      link: "/newsletter/february",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
    {
      title: "March 2024",
      link: "/newsletter/march",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
    },
  ];

  return (
    <div className="newsletter-column">
      <h2>Monthly Newsletters</h2>
      <div className="newsletter-tiles">
        {newsletters.map((newsletter, index) => (
          <a href={newsletter.link} key={index} className="newsletter-tile">
            <div className="newsletter-info">
              <h3>{newsletter.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsletterColumn;