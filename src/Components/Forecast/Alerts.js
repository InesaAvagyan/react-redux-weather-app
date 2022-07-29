import { useSelector } from "react-redux"
import { selectData } from "../../store/slices/data/data"

import '../WeatherInfo/WeatherInfo.css'

const Alerts = ({title}) => {

    const alerts = useSelector(selectData).currentCountry.alerts

    return (
        <div className="alerts-container">
            {alerts ? <h1>{title}</h1> : <h1 style={{color: "red"}}>There is no alerts for your location</h1>}
            {
                alerts ? alerts.map((el, index)=> ( 

                    <div className="alerts" key={index}>
                        <p><span>Category:</span>{el.category}</p>
                        {el.desc ? <p><span>Description:</span>{el.desc}</p> : ''}
                        <p><span>Effective:</span>{el.effective}</p>
                        <p><span>Expires:</span>{el.expires}</p>
                    </div>)) : ''
            }
        </div>
    )

}

export default Alerts