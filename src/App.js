import React from 'react';
import bio from './content/bio';


function App() {
  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Floris van der Flier</h1>
      <img src="/me.jpg" alt="Avatar" style={{ width: 150, borderRadius: '50%' }} />      
      <h1>About Me</h1>
      <p>{bio}</p>
      <a href="cv.pdf" target="_blank" rel="noopener noreferrer">
        View My CV
      </a>
    </div>
  );
}

export default App;
