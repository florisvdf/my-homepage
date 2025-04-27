import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
// import bio from './content/bio';


function App() {
  const [bio, setBio] = useState("");

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/bio.md")
      .then((res) => res.text())
      .then((text) => setBio(text));
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Floris van der Flier</h1>
      <img src={process.env.PUBLIC_URL + '/me.jpg'} alt="Avatar" style={{ width: 150, borderRadius: '50%' }} />
      <h1>About Me</h1>
      <ReactMarkdown>{bio}</ReactMarkdown>
      {/* <p>{bio}</p> */}
      <a href={process.env.PUBLIC_URL + '/cv.pdf'} target="_blank" rel="noopener noreferrer">View My CV</a>
    </div>
  );
}

export default App;
