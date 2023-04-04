/* Get Target element */
let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-name-input");

/* Add Event Listener to search Button */
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let URL = `https://restcountries.com/v3.1/name/${countryName}`;

//   console.log(URL.indexOf);

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        ${console.log(data[0].flags.alt)}
        <h2>${data[0].name.common}</h2>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});
