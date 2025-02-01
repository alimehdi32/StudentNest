let property = document.querySelector(".group")
property.addEventListener("click", (e) => {
    let dropdown = document.querySelector(".dropdown")
    if (dropdown.classList.contains("hidden")) {
        dropdown.classList.remove("hidden");
        dropdown.classList.add("block");
    } else {
        dropdown.classList.remove("block");
        dropdown.classList.add("hidden");
    }
})