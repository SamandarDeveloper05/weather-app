import React from 'react';
import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "ee8054795926b62e645f37de0ef23257";

export const fetchWeather =  async (query) => {
    const { data } = await axios.get(URL , {
        params:{
            q:query,
            units: "metric",
            APPID: API_Key,
        }
    })
    return data;
}