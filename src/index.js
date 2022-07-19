import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./index.css";

function Weather() {
  // const [allData, SetWeatherData] = useState(null)
  const [weather, updateweather] = useState({})
  const [city, Setcity] = useState("Rabat")
  const [cond, Setcondition] = useState({})

//  Setcity(allData.location)

  // const loc = e.target.elements.loc.value;${Casablanca}
  

  useEffect(() => {axios.get("https://weatherapi-com.p.rapidapi.com/current.json?q=casablanca", {
        headers: {
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key":
            "8c7fa2d5a9mshed2230395c12120p1b7af3jsn8607806f21e0",
        },
      })
      .then(function (response) {
        // SetWeatherData(response.data);
        Setcity(response.data.location.name+'/'+response.data.location.country)
        updateweather(response.data.current)
        Setcondition(response.data.current.condition)
        
       
      }).catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  // Setcity(allData.location)


  return (
    <div className="parent">
      <img src="../icons/ultraviolet.png" alt="" />
      <div className="div1"> The weather now</div>
      <div className="div2"><img src={"https:"+`${cond.icon}`} alt="" /></div>
      <div className="div3">{cond.text}</div>
      <div className="div4">{Math.trunc(weather.feelslike_c)}°</div>
      <div className="div5">{city.toUpperCase()}</div>
      <div className="div6"><span>Precepitation</span>  {weather.precip_mm}&nbsp;mm</div>
      <div className="div7"><span>UV</span>{weather.uv}</div>
      <div className="div8"> <span>Humidity</span>{weather.humidity}% </div>
    </div>
  )
}

  createRoot(document.getElementById("root")).render(<Weather/>);


//weather = {{condition:data.current.condition.icon},{condition:data.current.condition.text},{temp:data.current.feelslike_c},{location:data.location.name+"/"+data.location.name}}
