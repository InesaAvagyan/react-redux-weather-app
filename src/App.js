import AstroForecast from './Components/Forecast/AstroForecast';
import DailyForecast from './Components/Forecast/DailyForecast';
import HourlyForecast from './Components/Forecast/HourlyForecast';
import Inputs from './Components/Inputs/Inputs';
import WeatherInfo from './Components/WeatherInfo/WeatherInfo';

import './App.css';


function App() {
  return (
    <div className="App">
        <Inputs/>
        <WeatherInfo/>
        <AstroForecast title = 'Astro forecast'/>
        <HourlyForecast title = "Hourly Forecast"/>
        <DailyForecast title='Daily Forecast'/>
    </div>
  );
}

export default App;
