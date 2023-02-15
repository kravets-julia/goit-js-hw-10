import './css/styles.css';
// import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

const input = document.getElementById('search-box')
const countryList = document.querySelector('.country-list')
const countryCard = document.querySelector('.country-info')

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(onInputCountry, DEBOUNCE_DELAY))

function onInputCountry(e){
    // e.preventDefoult()
  const inputEl = e.target.value.trim();
  fetcData(inputEl).then((country)=>{(console.log(country))
return country.reduce((markup, country) => 
  createMarkup(country) + markup, '');
})
.then(updateCoutry)
  .catch((err)=>console.log("CATCH err"))
  // .finally(()=>{input.value=''})
}

function fetcData(name) {
   const URL = `https://restcountries.com/v3.1/name/${name}`
   return fetch(URL).then(response => response.json())
}

function createMarkup({name, capital, flags, languages, population}){
return `
<div class="card">
    <div class="img-flag">
        <img src=${flags.png} alt=${flags.alt} class='' width=20px>
        <h2> ${name.official} </h2>
    </div>
        <p><b>Capital:</b> ${capital}</h2>
        <p><b>Population:</b> ${population}</p>
        <p><b>Languages:</b> ${languages.spa}</p>
</div>
`
}
function updateCoutry(markup){
  countryCard.innerHTML = markup
}

// 