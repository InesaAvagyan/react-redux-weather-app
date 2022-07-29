import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { selectData } from '../../store/slices/data/data'

import '../WeatherInfo/WeatherInfo.css'

const AstroForecast = ({title}) => {

    const data = useSelector(selectData).currentCountry.forecast

    return(
        <div className='container'>
            <h1>{title}</h1>
            <div className='astro-bottom'>
                {
                    data ? data.map((el, index) => (

                        <div className='astro' key={index}>
                            <p>Date: {el.date}</p>
                            <p><FontAwesomeIcon icon={faMoon}/> Moon Phase:{el.astro.moon_phase}</p>
                            <p><FontAwesomeIcon icon={faSun}/> Sunrise:{el.astro.sunrise}</p>
                            <p>Sunset:{el.astro.sunset}</p>

                        </div>
                    )) : ''}
            </div>
        </div>
    )

}

export default AstroForecast