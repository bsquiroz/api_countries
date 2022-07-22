const dataSelectOptions = [
    {
        value: "all",
        label: "Todos",
    },
    {
        value: "Africa",
        label: "Africa",
    },
    {
        value: "Americas",
        label: "America",
    },
    {
        value: "Asia",
        label: "Asia",
    },
    {
        value: "Europe",
        label: "Europa",
    },
    {
        value: "Oceania",
        label: "Oceania",
    },
];

const selectCountries = document.querySelector("#selectCountries");

let html = '<option value="" selected disabled>Filter by region</option>';

dataSelectOptions.forEach(({ value, label }) => {
    html += `<option value="${value}">${label}</option>`;
});

selectCountries.innerHTML = html;
