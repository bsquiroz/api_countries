import { fetchCountry } from "./api.js";
import { printCountries, printCurrentCountry } from "./layout.js";

const selectCountries = document.querySelector("#selectCountries");
const current_country = document.querySelector(".current_country");
const container_principal = document.querySelector(".container_principal");
const search = document.querySelector("#search");
const goback = document.querySelector(".goback");

document.addEventListener("click", async (event) => {
    if (event.target.classList.contains("country_info-title")) {
        const name = event.target.textContent;
        const res = await fetchCountry(name);

        current_country.classList.add("current_country-show");
        container_principal.classList.add("content_countries-none");

        printCurrentCountry(res);
    }
});

selectCountries.addEventListener("change", (e) => {
    let value = e.target.value;

    if (value !== "all") {
        value = `region/${value}`;
    }

    printCountries(value);
});

search.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = event.target.search.value.trim();

    if (name === "") return alert("Ingresa un valor");

    const nameCountry = `name/${name}`;

    printCountries(nameCountry);
    search.reset();
});

goback.addEventListener("click", () => {
    current_country.classList.remove("current_country-show");
    container_principal.classList.remove("content_countries-none");
});
