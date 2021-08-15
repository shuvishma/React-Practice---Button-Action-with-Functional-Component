import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [showContent, setContent] = React.useState(false) ;
  let showParagraph = () => {
    setContent(true) ;
  }

  return (
    <div id="main">
      <button 
        id="click"
        onClick={showParagraph}>
      Click</button>

      {showContent ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
        </p>
      ) 
      : null}
    </div>
  );
}


export default App;
