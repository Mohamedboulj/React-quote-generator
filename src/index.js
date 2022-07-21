import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./index.css";

function Weather() {

  const [weather, updateweather] = useState({})
  const [city, setCity] = useState("Marrakech")
  const [query, setQuery] = useState("")
  const [location, setLocation] = useState('')
  const [cond, Setcondition] = useState({})
  const [lastUpdat, SetLastUpdat] = useState('')
 
  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(location)
    setCity(query)
    console.log(query);
    getWeatherData(city)
  
  }

  
  const getWeatherData = async (city) => await axios.get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, 
   { headers: {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key":
        "8c7fa2d5a9mshed2230395c12120p1b7af3jsn8607806f21e0",
    }})
  .then(function (response) {
    
    updateweather(response.data.current)
    console.log(response.data)
    Setcondition(response.data.current.condition)
    console.log(response.data.location.name)
    setLocation(response.data.location.name)
    SetLastUpdat(response.data.current.last_updated)
  })

    const getData = async ()=>{
      try{
       await getWeatherData(city)
      }
      catch(error){
        console.log(error);
      }
      
    }
    
    useEffect(() => { getData() },[city]);
     
   


  return (
    <>
    <form  onSubmit={(e)=>{handleSubmit(e)}}>
      <div  className="input-group d-flex justify-content-center my-4" >
        <input className="div-control-md "   onChange={(e)=>{setQuery(e.target.value)}}  type="text" placeholder="Search city.." name="query"  />
        <input type="submit" className="btn btn-secondary" value='Search' />
      </div>
    </form>
      <div className="parent">
        <img src="../icons/ultraviolet.png" alt="" />
        <div className="div1"> The weather now</div>
        <div className="div2"><img src={"https:"+`${cond.icon}`} alt="" /></div>
        <div className="div3">{cond.text}</div>
        <div className="div4">{Math.trunc(weather.feelslike_c)}°</div>
        <div className="div5">{location}</div>
        <div className="div6"><span>Precepitation</span>  {weather.precip_mm}&nbsp;mm</div>
        <div className="div7"><span>UV</span>{weather.uv}</div>
        <div className="div8"> <span>Humidity</span>{weather.humidity}% </div>
      </div>
      <div className="my-3 ">
        <h4 className="m-auto last_update">{lastUpdat}</h4>
      </div>
    </>
    
  )
}


  createRoot(document.getElementById("root")).render(<Weather/>);


