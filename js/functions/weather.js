import showAlert from "./alert.js"

export default function showweather(data) {
    showAlert("")

    document.querySelector("#weather").classList.add("show")

    document.querySelector("#title").innerHTML = `${data.city}, ${data.country}`
    document.querySelector("#temp").innerHTML =
        `${data.temp.toFixed(1).replace(".", ",")} <sup>°C</sup>`
    document.querySelector("#temp-max").innerHTML =
        `${data.tempMax.toFixed(1).replace(".", ",")} <sup>°C</sup>`
    document.querySelector("#temp-min").innerHTML =
        `${data.tempMin.toFixed(1).replace(".", ",")} <sup>°C</sup>`
    document.querySelector("#description").innerHTML = data.description
    document
        .querySelector("#temp-img")
        .setAttribute(
            "src",
            `https://openweathermap.org/img/wn/${data.icon}@2x.png`,
        )
    document.querySelector("#humidity").innerHTML = `${data.humidity}%`
    document.querySelector("#wind").innerHTML =
        `${data.windSpeed.toFixed(1).replace(".", ",")}km/h`
}
