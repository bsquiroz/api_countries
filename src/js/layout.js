import { fetchContries } from "./api.js";

async function printCountries(op = "all") {
    const contentCountries = document.querySelector(".content_countries");

    const res = await fetchContries(op);

    if (typeof res === "string") {
        contentCountries.innerHTML = `<h2 class='title1'>No se encontraron coincidencias de ${res}</h2>`;
        return;
    }

    const currency = (number) =>
        new Intl.NumberFormat("en-CA", {
            style: "decimal",
        }).format(number);

    let html = "";

    res.forEach(({ name, population, region, capital, flags }) => {
        html += `
            <div class="country">
                <div class="country_img">
                    <img src="${flags.png}" alt="${name}">
                </div>
                <div class="country_info">
                    <div class="country_info-title">
                        <p class="title1">${name}</p>
                    </div>
                    <div class="country_info-body">
                        <p class="text1">Population: <span class="text2">${currency(
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

export { printCountries };
