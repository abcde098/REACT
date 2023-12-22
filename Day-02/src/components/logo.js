// Logo.js

import React from 'react';

const Logo = () => {
  // Replace 'url_to_your_online_logo_image' with the actual URL of your online logo image
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src="https://t3.ftcdn.net/jpg/06/31/28/64/240_F_631286405_fuGB9zavazL7Rg5UwT1vmOj3IyU4lUib.jpg"
        alt="Gardening Store Logo"
        style={{ width: '150px', height: '150px',alignItems: 'center' }} // Adjust the size as needed
      />
    </div>
  );
};

export default Logo;
