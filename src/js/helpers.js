export const formatNumber = (number) =>
    new Intl.NumberFormat("en-CA", {
        style: "decimal",
    }).format(number);

export const printBorders = (borders) => {
    if (!borders) return "<p class='title2'>With nobody</p>";
    let html = "";
    borders.forEach(
        (border) => (html += `<div class="label shadow">${border}</div>`)
    );
    return html;
};

export const printCurrencies = (currency) => {
    let aux = "";
    for (const key in currency) {
        aux = currency[key].name;
    }
    return aux;
};

export const printLenguages = (leng) => {
    let aux = [];
    for (const key in leng) {
        aux.push(leng[key]);
    }
    let html = "";
    aux.forEach((element) => {
        html += `${element} `;
    });
    return html;
};
