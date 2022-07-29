import { useEffect } from 'react'
import './WeatherInfo.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faTemperatureHalf, faWind } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { selectData, fatchData } from '../../store/slices/data/data'


const WeatherInfo = () => {

    const data = useSelector(selectData)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fatchData('Yerevan'))
    }, [])

    return(
        <div className="container">
    
            <div className="top">
                <div className="location">
                    <p>{data.currentCountry.name}</p>
                </div>
                <div className="temp">
                    {data.currentCountry.temp ? <h1>{data.currentCountry.temp.toFixed()}<span>ºC</span></h1> : null}
                    <div className='description'>
                        {data.currentCountry.description ? <p>{data.currentCountry.description}</p> : null}
                    </div>
                </div>
            </div>
            
            <div className="bottom">
                <div className="feels">
                    {data.currentCountry.feelslike ? <p><span><FontAwesomeIcon icon = {faTemperatureHalf}/></span> {data.currentCountry.feelslike.toFixed()}<span>ºC</span></p> : null}
                    <p>Feels Like</p>
                </div>
                <div className="humidity">
                    {data.currentCountry.humidity ? <p><span><FontAwesomeIcon icon = {faDroplet}/></span> {data.currentCountry.humidity}%</p> : null}
                    <p>Humidity</p>
                </div>
                <div className="wind">
                    {data.currentCountry.speed ? <p><span><FontAwesomeIcon icon = {faWind}/></span> {data.currentCountry.speed} m/s</p> : null}
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    )

}

export default WeatherInfo