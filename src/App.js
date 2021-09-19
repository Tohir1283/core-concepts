import logo from "./logo.svg";
import "./App.css";

const getCountry = () => {
  const url = "https://restcountries.eu/rest/v2/all";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  console.log(countries);
  const splitCountries = countries.map((country) => addData(country));

  const countryData = document.getElementById("countryData");
  countryData.innerHTML = splitCountries.join(" ");
};

function addData(country) {
  console.log(country[0]);
  return `<div class="country">
    <img src='${country.flag}'>
    <h2>${country.name}</h2>
    <h4>${country.capital} </h4>
    <h4>${country.region}</h4>
     </div>`;
}

const AppendData = () => {
  return <div id="countryData"></div>;
};

getCountry();

function App() {
  return (
    <div className="App" id="showCountries">
      <AppendData></AppendData>
    </div>
  );
}

export default App;
