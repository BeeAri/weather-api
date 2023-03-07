import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import City from './components/City';
import Header from './components/Header';

function App() {
  const url = "https://api.openweathermap.org/data/2.5/"
  const key = "a1d9ab3e5cf2751d29e06a5306ea3f4a";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();


  useEffect(()=>{
    
    async function getApi() {
      try {
        const response = await axios.get(`${url}weather?q=${search}&appid=${key}&units=metric&lang=tr`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();

  },[search]);

  console.log(search);

  return (
<div className="anahat">
<Header />
    <div className="App1">
          <div className="container">
            <input 
            onChange={(e) => setSearch(e.target.value)} 
            type="text" 
            placeholder="Şehir İsmi Giriniz" 
            className="px-3 w-[250px] py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
            />
            {city && <City city={city} />}

            {/* <input 
            
            className="border-8 bg-slate-500" 
            type="text" 
            /> */}

          </div>
    </div>
</div>
  );
}

export default App;
