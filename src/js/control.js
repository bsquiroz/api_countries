import { printCountries } from "./layout.js";

const selectCountries = document.querySelector("#selectCountries");

selectCountries.addEventListener("change", (e) => {
    let value = e.target.value;

    if (value !== "all") {
        value = `region/${value}`;
    }

    printCountries(value);
});

const search = document.querySelector("#search");

search.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = event.target.search.value.trim();

    if (name === "") return alert("Ingresa un valor");

    const nameCountry = `name/${name}`;

    printCountries(nameCountry);
    search.reset();
});
