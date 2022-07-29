import { useCallback, useRef } from "react"
import { faBars, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from "react-redux"
import { selectData, fatchData, changeCorentCountry,deleteCountry } from "../../store/slices/data/data"
import { selectInputText, typeText } from "../../store/slices/inputSlice/InputSlice"
import Alerts from "../Forecast/Alerts"

import "./Inputs.css"

const Inputs = () => {

    const data = useSelector(selectData).countres

    const currentCountry = useSelector(selectData).currentCountry

    const inputText = useSelector(selectInputText)

    const selectRef = useRef(null)

    const dispatch = useDispatch()

    const onSubmitHandler = useCallback((e) => {
        e.preventDefault()
        dispatch(fatchData(inputText))
        dispatch(typeText(''))    
    })

    const openNav = () => {
        selectRef.current.style.width = '230px'
    }
    const closeNav = () => {
        selectRef.current.style.width = '0'
    }

    return(
        <div className="input-container">
            <div className="selectedLocations">
                <button onClick={openNav} className='selected'><FontAwesomeIcon icon={faBars} /></button>
                <div ref={selectRef} id="dropdown">
                    <button onClick={closeNav}>X</button>
                    <select className="selected" value={currentCountry.name} onChange={(e) => dispatch(changeCorentCountry(e.target.value))}>
                        {
                        data.map(el => <option value={el.name} key={el.name} selected={el.name === currentCountry.name}>{el.name}</option>)
                        }
                    </select>  
                    <span style={{cursor: "pointer", color: 'beige'}} onClick={() => dispatch(deleteCountry(currentCountry.name))}><FontAwesomeIcon icon={faTrash}/></span>

                    <Alerts title = 'Alerts'/> 
                </div>
            </div>

            <div className="searchBar">
                <form onSubmit={(e) => onSubmitHandler(e)}>
                    <input 
                    onChange={(e) => dispatch(typeText(e.target.value))}
                    value={inputText}
                    placeholder = 'Search for a city'
                    type="text" />
                </form>
            </div>
        </div>
    )
}

export default Inputs