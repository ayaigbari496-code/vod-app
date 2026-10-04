import React from 'react';

const Header = () => {
  return (
    <header style={{ 
      backgroundColor: '#1a1a1a', 
      color: '#ffffff', 
      padding: '15px 20px', 
      textAlign: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
    }}>
      <h1 style={{ margin: 0, fontFamily: 'sans-serif', letterSpacing: '1px', fontSize: '24px' }}>My Vod</h1>
    </header>
  );
};

export default Header;
