import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./index.css"


function QuoteGen() {
  const [quote, Genquote] = useState({text: "I never see what has been done; I only see what remains to be done.",
  author: "Marie Curie"});
  const [quotes, Genquotes] = useState([]);
function generate(){
    
    let rndmkey = [Math.floor(Math.random() * quotes.length)];
    
    Genquote(quotes[rndmkey])
  } 


  useEffect(()=>{axios.get("https://type.fit/api/quotes")
      .then(function (response) {
       Genquotes(response.data);
        console.log(response.data);
       
        
       });
    
  },[])
  return (
    <>
    <h1>Quote Generatore </h1>
    <div className="quote">
      <blockquote>{quote.text}</blockquote>
      <span>{quote.author}</span>
      <button class="button-30" role="button" onClick={generate}>
        Generate 
      </button>
    </div>
    </>
    
  );
}
    

createRoot(document.getElementById("root")).render(<QuoteGen />);
