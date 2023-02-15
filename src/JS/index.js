import '../css/styles.css';

import debounce from 'lodash.debounce';
import SearchCountry from './fetchCountries';


const input = document.getElementById('search-box')
const countryList = document.querySelector('.country-list')
const countryCard = document.querySelector('.country-info')

const searchCountry = new SearchCountry();

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(onInputCountry, DEBOUNCE_DELAY))

function onInputCountry(e){
  clearCountry()
 searchCountry.country = e.target.value.trim();
  if (!e.target.value.trim()){
        return
      }
      searchCountry.fetchCountries().then(data => newMarkup(data))
}


let markup

      function newMarkup(data) {
        if(!data) 
{return}
      
      if (data.length === 1) {
        markup = data
        .reduce((markup, country) => 
  createMarkup(country) + markup, '');
  countryCard.innerHTML = markup;
      }
      if(data.length >= 2 && data.length <= 10){
        let listOfCountry = '';
   data.forEach(country => {
     listOfCountry += `<li class="list-item">
      <img src="${country.flags.svg}" width=20px/>
      <span> ${country.name.common}</span>
      </li>`;
      countryList.innerHTML = listOfCountry;
    });
  
      }
    }


function createMarkup({ name, capital, flags, languages, population }){
return `
<div class="card">
    <div class="img-flag">
        <img src=${flags.png} alt=${flags.alt} class='' width=30px>
        <h2> ${name.official} </h2>
    </div>
        <p><b>Capital:</b> ${capital}</h2>
        <p><b>Population:</b> ${population}</p>
        <p><b>Languages:</b> ${languages.spa}</p>
</div>
`
}


function clearCountry(){
  countryList.innerHTML='';
  countryCard.innerHTML=''
}