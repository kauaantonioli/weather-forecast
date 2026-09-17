import showAlert from "./functions/alert.js"
import { apiKey } from "../config.js"

const form = document.querySelector("#search")
const input = document.querySelector("#input")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const cityName = input.value.trim()

    if (!cityName) {
        return showAlert("Digite um local válido.")
    }

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    const response = await fetch(weatherUrl)
    const data = await response.json()

    console.log(data)

    input.value = ""
})
