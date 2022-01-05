import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";
const API_KEY = "b24952a3a3ad409097681017212312";

let localcache = {};
function Weather() {
  //  this is for change the background of the card depending on the time
  let time = new Date();
  let Hours = time.getHours();
  let isNight = false;
  if (6 < Hours && Hours < 17) {
    isNight = false;
  } else {
    isNight = true;
  }
  // this when the real code start
  let navigate = useNavigate();
  let { name } = useParams();
  const [location, setlocation] = useState(name);
  const [weather, setweather] = useState({
    city: "Arbil",
    icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
    tem: 10,
  });

  const updateWeather = async () => {
    if (localcache[location]) {
      setweather(localcache[location]);
      return;
    }

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
    <div className={isNight ? "isNight" : "isDay"}>
      <h3>{weather.city}</h3>
      <img src={weather.icon} alt={weather.location} />
      <h1>{weather.tem} C°</h1>
      <Button
        type="primary"
        className="card-button"
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        Go To home
      </Button>
    </div>
  );
}

export default Weather;
