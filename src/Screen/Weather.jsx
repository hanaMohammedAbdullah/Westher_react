import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const API_KEY = "b24952a3a3ad409097681017212312";

let localcache = {};
function Weather() {
  let navigate = useNavigate();
  let { name } = useParams();
  const [location, setlocation] = useState(name);
  const [weather, setweather] = useState({
    city: "arbil",
    icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
    tem: 10,
  });

  const updateWeather = async () => {
    if (localcache[location]) {
      setweather(localcache[location]);
      return;
    }

    console.log(name);
    const respond = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
    );
    const data = await respond.json();

    const TodayWeather = {
      city: data.location.name,
      icon: data.current.condition.icon,
      tem: data.current.temp_c,
    };
    localcache[location] = TodayWeather;
    setweather(TodayWeather);
  };
  useEffect(() => {
    updateWeather();
  }, [location]);
  return (
    <div className="Card">
      <h3>{weather.city}</h3>
      <img src={weather.icon} alt={weather.location} />
      <h1>{weather.tem}°</h1>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default Weather;
