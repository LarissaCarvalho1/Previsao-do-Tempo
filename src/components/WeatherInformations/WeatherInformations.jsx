import './WeatherInformations.css'

function WeatherInformations({ weather }) {

    return (
        <div className='weather-container'>
            <h2>{ weather.name }</h2>
            <div className='weather-info'>
                <img src={ `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png` } />
                <p className='weather-temperature'>{ Math.round(weather.main.temp) }°C</p>
            </div>
            <p className='weather-description'>{ weather.weather[0].description }</p>
            <div className='weather-details'>
                <p>Sensação térmica: { Math.round(weather.main.feels_like) }°C</p>
                <p>Umidade: { weather.main.humidity }%</p>
                <p>Pressão: { weather.main.pressure }</p>
            </div>
        </div>

    )
}

export default WeatherInformations