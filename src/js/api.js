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

export { fetchContries };
