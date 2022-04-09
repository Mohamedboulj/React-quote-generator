import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./index.css"


function QuoteGen() {
  const [quote, Genquote] = useState({text: "Silence is the true friend that never betrays.",
  author: "Confucius"});
  const [quotes, Genquotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
function generate(){
    
    let rndmkey = [Math.floor(Math.random() * quotes.length)];
    
    Genquote(quotes[rndmkey])
  } 


  useEffect(()=>{axios.get("https://type.fit/api/quotes")
      .then(function (response) {
        if(response.data.length > 0){
          setIsLoading(false)
          Genquotes(response.data);
        }
      
        
       
        
       });
    
  },[])
  return isLoading?
  <div class="loadingio-spinner-ripple-4pnogkvp7g3"><div class="ldio-ux3rtz5zf9">
  <div></div><div></div>
  </div></div>
         :
  
  
  (
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

