import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const fatchData = createAsyncThunk(
    'data/fatchData',
    async function(location) {
        
        const API_KEY = 'cb84ab3648de49b3a00141142222507'

        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=14&alerts=yes`)

        const initialData = await response.data
        
        const data = {
            description: initialData.current.condition.text,
            name: initialData.location.name,
            temp: initialData.current.temp_c,
            feelslike: initialData.current.feelslike_c,
            speed: initialData.current.wind_mph,
            pressure_mb: initialData.current.pressure_mb,
            humidity: initialData.current.humidity,
            icon: initialData.current.condition.icon.slice(34),
            location: initialData.location.country,
            forecast: initialData.forecast.forecastday.map(el => ({
                astro:{
                    moon_phase: el.astro.moon_phase,
                    sunrise: el.astro.sunrise,
                    sunset: el.astro.sunset
                },
                date: el.date,
                hour: el.hour,
                icon: el.day.condition.icon.slice(34),
                maxTemp: el.day.maxtemp_c,
                minTemp: el.day.mintemp_c,
            })),

            alerts: initialData.alerts.alert.length !== 0 ? initialData.alerts.alert.map(el => ({
                category: el.category,
                desc: el.desc,
                effective: el.effective,
                expires: el.expires
            })) : '' 
                
        }
        return data
    }
)
const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        errors: false,
        countres: [],
        currentCountry: {}
    },
    reducers: {
        changeCorentCountry(state, {payload}) {
            return {
                ...state,
                currentCountry: state.countres.filter(el => el.name === payload)[0]
            }
        },
        deleteCountry(state, {payload}){
            if (state.countres.length > 1) {
                return{
                    ...state,
                    currentCountry: state.countres[0],
                    countres: state.countres.filter(el => el.name !== payload)
                }
            }
            return state
        }
    },
    extraReducers: {
        [fatchData.fulfilled]: (state, {payload}) => {
            if (state.countres.findIndex(el => el.name === payload.name) === -1) {
                return {
                    ...state,
                    loading: false,
                    errors: false,
                    countres: [...state.countres, payload],
                    currentCountry: payload
                }
            }
            return {
                ...state,
                loading: false,
                errors: false,
                countres: state.countres,
                currentCountry: payload
            }
        }
    }
})
export const { changeCorentCountry, deleteCountry } = dataSlice.actions

export const selectData = (state) => state.data

export const dataReducer = dataSlice.reducer







