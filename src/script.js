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
function placeholder() {
    let loc = ["batla house", "zakir nagar", "okhla vihar", "Jasola", "Shaheen Bagh", "Abul Fazal enclave", "New Friends Colony", "Taimoor Nagar", "Tikona Park"]
    let random = Math.floor(0 + Math.random()*9)
    return loc[random]
}

    let input = document.querySelector(".input")
    setInterval(() => {
        input.placeholder = placeholder()
        console.log(placeholder())
    }, 3000);
   
        
    

