// src/App.js
import React from 'react';
import './App.css';
import News from './News';
import headImage from './head.png'; // Import the image

const App = () => {
  return (
    <div className="main-container">
      <div className="top-container">
        {/* Replace the heading with the image */}
        <img src={headImage} alt="Press Pulse" className="heading-image" />
      </div>
      <div className="news-container">
        <div className="news1234">
          <News newspaper="ETnews" title="The Economic Times" url="https://economictimes.indiatimes.com/rssfeedstopstories.cms" />
          <News newspaper="THnews" title="The Hindu" url="https://www.thehindu.com/feeder/default.rss" />
          <News newspaper="AJnews" title="Al Jazeera" url="https://www.aljazeera.com/xml/rss/all.xml" />
          <News newspaper="Gnews" title="The Guardian" url="https://www.theguardian.com/world/rss" />
        </div>
      </div>
    </div>
  );
};

export default App;
