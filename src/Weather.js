import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp} °C`
    );
  }

  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);
}
