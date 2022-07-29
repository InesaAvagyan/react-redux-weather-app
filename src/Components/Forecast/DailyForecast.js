import { useSelector } from "react-redux"
import { selectData } from "../../store/slices/data/data"

import '../WeatherInfo/WeatherInfo.css'

const DailyForecast = ({title}) => {

    const data = useSelector(selectData).currentCountry.forecast

    return (
    <div className="container">
        <h1>{title}</h1>
        <hr/>
        <div className='daily-bottom'>
            {
                data ? data.map((item, index) =>( 
                <div className="daily" key={index}>
                    <p>{item.date}</p>
                    <p>Max temp is {item.maxTemp.toFixed()} <span>ºC</span></p>
                    <p>Min temp is {item.minTemp.toFixed()} <span>ºC</span></p>
                    <img src={require(`../../background/icon${item.icon}`)} alt="" />
                </div>))  : ''
            }
            </div>
        </div>
    )
}

export default DailyForecast