import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";




function QuoteGen() {
    const [{text,author},Genquote]=useState();
    useEffect(
        axios({
            method: 'get',
            url: 'https://type.fit/api/quotes',
            responseType: 'stream'
          })
            .then(function (response) {
                var keys = Object.keys(response.data);
                rndmkey = keys[Math.floor(Math.random() * keys.length)];
               
                    response.data[rndmkey].text;
                    response.data[rndmkey].author;
                

            }),[]
            
    )
  return (
    <div className="quote">
     
      <blockquote>{quote.text}</blockquote>
      <span>{quote.author}</span>

      <button onClick={()=>{Genquote( response.data[rndmkey].text, response.data[rndmkey].author)}}>
        <img src="outline_sync_black_24dp.png" alt="" />
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<QuoteGen />);

