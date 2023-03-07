import React from 'react'
import { GoLocation } from "react-icons/go";
import { CiTempHigh } from "react-icons/ci";

const City = ({city}) => {

  console.log(city);
  return (
    <div className='result'>
      <tr>
        <td className="text-l"><GoLocation /></td>
        <td className="text-2xl">{city.name}, {city.sys.country}</td>
        </tr>
      <tr>
        <td className="text-l">{city.weather[0].description}</td>
      </tr>
      <tr>
        <td className="text-xl"><CiTempHigh/></td>
        <td className="text-2xl">{Math.round(city.main.temp)} °C</td>
        <h1 className="text-xl">{Math.round(city.main.temp_min)}°C / {Math.round(city.main.temp_max)}°C</h1>
        {/* <h1>{city.}</h1> */}
      </tr>
        
      
    </div>
  )
}

export default City;
