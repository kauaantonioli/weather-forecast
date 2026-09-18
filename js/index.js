import showAlert from "./functions/alert.js"
import showweather from "./functions/weather.js"
import { apiKey } from "./config.js"

const form = document.querySelector("#search")
const input = document.querySelector("#input")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const cityName = input.value.trim()

    if (!cityName) {
        return showAlert("Digite um local válido.")
    }

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=pt_br`
    const response = await fetch(weatherUrl)
    const data = await response.json()

    if (data.cod === 200) {
        showweather({
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            tempMax: data.main.temp_max,
            tempMin: data.main.temp_min,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            windSpeed: data.wind.speed * 3.6,
            humidity: data.main.humidity,
        })
    } else {
        document.querySelector("#weather").classList.remove("show")
        showAlert(`Não foi possível encontrar o local "${cityName}"`)
    }

    input.value = ""
})
