import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error,setError]=useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e952570d5251148bfe1defdf72bbe91d";

    let getWeatherInfo = async () => {
        try{
        let res = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonRes = await res.json();
        console.log(jsonRes);

        let result = {
            city:city,
            temp: jsonRes.main.temp,
            tempMin: jsonRes.main.temp_min,
            tempMax: jsonRes.main.temp_max,
            humidity: jsonRes.main.humidity,
            feelsLike: jsonRes.main.feels_like,  // Fixed case for feels_like
            weather: jsonRes.weather[0].description,
        };
        console.log(result);
        return result;
    }
    catch(err){
        throw err;
    }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo= await getWeatherInfo();  // Call the API before resetting the city state
        updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>  {/* Added onSubmit handler */}
                <TextField
                    id="city"
                    label="City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">Send</Button> {/* Button now works */}
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}
