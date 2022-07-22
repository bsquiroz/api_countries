const changeTheme = document.querySelector(".changeTheme");

changeTheme.addEventListener("click", () => {
    const light = `<i class='bx bxs-sun' ></i>
                <span class="text1">Ligth Mode</span>`;

    const dark = `<i class='bx bxs-moon'></i>
                <span class="text1">Dark Mode</span>`;

    document.body.classList.toggle("darkTheme")
        ? (changeTheme.innerHTML = light)
        : (changeTheme.innerHTML = dark);
});
