const baseUrl = "https://restcountries.com/v3.1";

async function fetchContries(op) {
    try {
        const url = `${baseUrl}/${op}`;
        const data = await fetch(url);
        let res = await data.json();

        if (res.status === 404) {
            const noFind = op.split("/")[1];
            return noFind;
        }

        return res.map((e) => {
            return {
                name: e.name.common,
                population: e.population,
                region: e.region,
                capital: e.capital,
                flags: e.flags,
            };
        });
    } catch (error) {
        console.log(error, " => un error");
    }
}

async function fetchCountry(name) {
    try {
        const url = `${baseUrl}/name/${name}?fullText=true`;
        const data = await fetch(url);
        let res = await data.json();

        return res.map((e) => {
            return {
                name: e.name.common,
                nativeName: e.name.official,
                population: e.population,
                region: e.region,
                subRegion: e.subregion,
                capital: e.capital,
                flags: e.flags,
                tld: e.tld,
                currencies: e.currencies,
                languages: e.languages,
                borders: e.borders,
            };
        });
    } catch (error) {
        console.log(error);
    }
}

export { fetchContries, fetchCountry };
