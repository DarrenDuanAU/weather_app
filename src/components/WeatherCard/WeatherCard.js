import CurrentCity from "./components/CurrentCity"
import OtherCities from "./components/OtherCities"
import Forecast from "./components/Forecast"

const WeatherCard = () => {
  return (
    <div>
      <CurrentCity />
      <OtherCities />
      <Forecast />
    </div>
  )
}
export default WeatherCard;