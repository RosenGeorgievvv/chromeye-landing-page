import React from 'react';

import './Banner.scss';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Ready to Get Started</h1>
        <p className="banner-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sed scelerisque arcu scelerisque ultrices. Habitant ac semper lorem.
        </p>
        <button className="banner-button">Request a Call</button>
      </div>
    </div>
  );
};

export default Banner;
