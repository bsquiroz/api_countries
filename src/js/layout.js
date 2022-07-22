import { fetchContries } from "./api.js";
import {
    formatNumber,
    printBorders,
    printCurrencies,
    printLenguages,
} from "./helpers.js";

async function printCountries(op = "all") {
    const contentCountries = document.querySelector(".content_countries");

    const res = await fetchContries(op);

    if (typeof res === "string") {
        contentCountries.innerHTML = `<h2 class='title1'>No se encontraron coincidencias de ${res}</h2>`;
        return;
    }

    let html = "";

    res.forEach(({ name, population, region, capital, flags }) => {
        html += `
            <div class="country">
                <div class="country_img">
                    <img src="${flags.png}" alt="${name}">
                </div>
                <div class="country_info">
                    <p class="country_info-title title1">${name}</p>
                    <div class="country_info-body">
                        <p class="text1">Population: <span class="text2">${formatNumber(
                            population
                        )}</span></p>
                        <p class="text1">Region: <span class="text2">${region}</span></p>
                        <p class="text1">Capital: <span class="text2">${capital}</span></p>
                    </div>
                </div>
            </div>`;
    });

    contentCountries.innerHTML = html;
}

function printCurrentCountry(res) {
    const currentCountryContent = document.querySelector(
        ".current_country-content"
    );

    let html = "";
    res.forEach(
        ({
            name,
            nativeName,
            population,
            region,
            subRegion,
            capital,
            flags,
            tld,
            currencies,
            languages,
            borders,
        }) => {
            html += `
            <div class="current_country-img">
                <img src="${flags.svg}" alt="${name}">
            </div>

            <div class="current_country-info">
                <p class="current_country-title title1">${name}</p>

                <div class="section1">
                    <p class="text1">Native name: <span class="text2">${nativeName}</span></p>
                    <p class="text1">Population: <span class="text2">${formatNumber(
                        population
                    )}</span></p>
                    <p class="text1">Region: <span class="text2">${region}</span></p>
                    <p class="text1">Sub region: <span class="text2">${subRegion}</span></p>
                    <p class="text1">Capital: <span class="text2">${capital}</span></p>
                </div>

                <div class="section2">
                    <p class="text1">Top level domain: <span class="text2">${tld}</span></p>
                    <p class="text1">Currencies: <span class="text2">${printCurrencies(
                        currencies
                    )}</span></p>
                    <p class="text1">Languages: <span class="text2">${printLenguages(
                        languages
                    )}</span></p>
                </div>

                <div class="section3">
                    <p class="text1">Border countries</p>

                    <div class="content_labels">
                        ${printBorders(borders)}
                    </div>
                </div>
            </div>`;
        }
    );

    currentCountryContent.innerHTML = html;
}

export { printCountries, printCurrentCountry };
