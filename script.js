'use strict';
const inputCountry = document.getElementById('search');
const buttonCountry = document.querySelector('.button-icon-search');
const result = document.getElementById('result');
const inicio = document.getElementById('inicio-link');
//*******************************************************************/

buttonCountry.addEventListener('click', () => {

  let countryName = inputCountry.value;
  let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch( url )
  .then( res => res.json() )
  .then(data => {
    if( data.length > 0) {
      result.innerHTML = `
      <div class="country">
        <img src="${data[0].flags.svg}" class="flag-country"/>
        <div class="country-info">
          <p class='country-name'><span>${data[0].name.official}</span></p>
          <p class='data-pop'><span>Population:</span> ${data[0].population}</p>
          <p class='data-reg'><span>Region:</span> ${data[0].region}</p>
          <p class='data-cap'><span>Capital:</span> ${data[0].capital[0]}</p>
        </div>
      </div>
    `;
    } else {
      result.innerHTML = `<p class='error-msg'>No se encontraron países con ese nombre</p>`;
    }
   })
  .catch(error => {
    result.innerHTML = `<p class='error-msg'>No se encontraron países con ese nombre</p>`;
  })
  });



function displayCountries ( countries ) {
result.innerHTML = '';
const countriesArray = ['Germany', 'United States of America', 'Brazil', 'Iceland', 'Afghanistan', 'Argentina', 'Albania', 'Algeria'];

countriesArray.forEach(countryName =>  {
  const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  fetch(url).then( res => res.json() )
  .then(data => {
    if(data.length) {
      result.innerHTML += `
      <div class="country">
        <img src="${data[0].flags.svg}" class="flag-country"/>
        <div class="country-info">
          <p class='country-name'><span>${data[0].name.official}</span></p>
          <p class='data-pop'><span>Population:</span> ${data[0].population}</p>
          <p class='data-reg'><span>Region:</span> ${data[0].region}</p>
          <p class='data-cap'><span>Capital:</span> ${data[0].capital[0]}</p>
        </div>
      </div>
    `;
  }})
})
}


//**********************************************/
//** FUNCIONALIDAD TECLA ENTER (KeyCode 13) **//
inputCountry.addEventListener('keydown', function(event) {
  if(event.keyCode === 13) {
    let countryName = inputCountry.value;
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  
    fetch( url )
    .then( res => res.json() )
    .then(data => {
      if( data.length > 0) {
        result.innerHTML = `
        <div class="country">
          <img src="${data[0].flags.svg}" class="flag-country"/>
          <div class="country-info">
            <p class='country-name'><span>${data[0].name.official}</span></p>
            <p class='data-pop'><span>Population:</span> ${data[0].population}</p>
            <p class='data-reg'><span>Region:</span> ${data[0].region}</p>
            <p class='data-cap'><span>Capital:</span> ${data[0].capital[0]}</p>
          </div>
        </div>
      `;
      } else {
        result.innerHTML = `<p class='error-msg'>No se encontraron países con ese nombre</p>`;
      }
     })
    .catch(error => {
      result.innerHTML = `<p class='error-msg'>No se encontraron países con ese nombre</p>`;
    })
  }
})


//*****************************************/
//** FUNCION PARA VOLVER AL INICIO 🌏 *//
inicio.addEventListener('click', function() {
  displayCountries();
})


//**********************************************/
//** FUNCION PARA INICIAR LLAMANDO LOS PAISES **//
displayCountries();


//*****************/
//** DARK MODE **//
function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}