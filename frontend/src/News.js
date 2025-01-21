// src/News.js
import React, { useState, useEffect } from 'react';

const News = ({ newspaper, title, url }) => {
  const [headlines, setHeadlines] = useState([]);

  const proxyUrl = "http://localhost:3000/proxy?url=";  // Quoted URL

  useEffect(() => {
    const fetchHeadlines = async () => {
      const finalUrl = proxyUrl + encodeURIComponent(url);
      console.log("Fetching from URL: ", finalUrl); // Log the fetch URL

      try {
        const response = await fetch(finalUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();

        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const items = xml.querySelectorAll('item title');

        let headlinesArray = [];
        items.forEach(item => {
          headlinesArray.push(item.textContent);
        });
        setHeadlines(headlinesArray.slice(0, 20)); // Top 10 headlines
      } catch (error) {
        console.error('Error fetching headlines:', error);
        setHeadlines(['Unable to load headlines']);
      }
    };

    fetchHeadlines();
  }, [url]);

  return (
    <div className={`news ${newspaper}`}>
      <div className="upper">
        <h2>{title}</h2>
      </div>
      <div className="lower">
        <ul>
          {headlines.map((headline, index) => (
            <li key={index}>
              <div className="headline"><span className="star">&#9733;</span> {/* Unicode star character */}
              {headline}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
