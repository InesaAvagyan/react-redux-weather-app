import { useSelector } from "react-redux"
import { selectData } from "../../store/slices/data/data"

import '../WeatherInfo/WeatherInfo.css'

const HourlyForecast = ({title}) => {

    const data = useSelector(selectData).currentCountry.forecast

    return(
        <div className="container">
        <h1>{title}</h1>
        <div className="hourly-bottom">
            {data ? data.map((item, index) => (
                <div className="hour" key={index}>
                    <p>{item.hour[0].time}</p>

                    <p>{item.hour[0].temp_c.toFixed()} <span>ºC</span></p>
                    <p>Chance of rain: {item.hour[0].chance_of_rain}%</p>

                    <span><img src={require(`../../background/icon${item.icon}`)}alt="" /></span>

                    <p>{item.hour[0].condition.text}</p>
                </div>
            )) : ''}
        </div>
    </div>
    )
}

export default HourlyForecast



//<span>{units === 'metric' ? 'ºC' : 'ºF'}</span