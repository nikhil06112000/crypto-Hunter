import React, { useState } from 'react'


const api = {
    key: "15cf920197efdf125f87fecca240472f",
    base: "https://api.openweathermap.org/data/2.5/"
}
const About = () => {
    const [data, setData] = useState('');
    const [weather, setWeather] = useState({});

    const handleChnage = (e) => {
        setData(e.target.value);
    }

    const serach = (e) => {
        if (e.key === "Enter") {
            fetch(`${api.base}weather?q=${data}&units=metric&APPID=${api.key}`)
                .then(res => res.json()).
                then((d) => {
                    setWeather(d);
                    setData('');
                    console.log(d);
                })

        }
    }
    const dateBuilder = (d) => {
        const months = ['January', 'february', 'March', 'April', 'May', 'June', 'July', 'August', 'september', 'october',
            'November', 'December'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`


    }

    return (
        <div>
            <main>
                <div className='search-bar'>
                    <input type='text'
                        className='search-bar'
                        placeholder='search....'
                        value={data}
                        onChange={handleChnage}
                        onKeyPress={serach}
                    />

                </div>
                <div>
                    <div className='location-box'>
                        <div className='location'>
                            {weather.name}
                        </div>
                        <div className='date'>
                            {dateBuilder(new Date())}
                        </div>

                    </div>
                    <div>
                         {weather?.main?.temp} 
                    </div>
                    <div>
                    {weather?.weather[0]?.main}
                    </div>


                </div>



            </main>

        </div>
    )
}

export default About
