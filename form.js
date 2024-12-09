const form = document.getElementById("numberForm");
const inputField = document.getElementById("numberInput");
const errorMessage = document.getElementById("errorMessage");

document.addEventListener("DOMContentLoaded", () => {
    inputField.addEventListener("input", () => {
        const value = inputField.value; 
        
        if ((value <= 10) && (value !== "")) { 
            errorMessage.textContent = "The number must be greater than 10."; 
            errorMessage.style.display = "block"; 
        } else {
            errorMessage.textContent = ""; 
            errorMessage.style.display = "none"; 
        }
        
    });

    form.addEventListener("submit", (event) => {
        const value = inputField.value; 

        if ((value <= 10) && (value !== "")) {
            errorMessage.classList.remove("hidden"); 
            event.preventDefault(); 
        } else {
            errorMessage.classList.add("hidden"); 
            alert("Form submitted successfully!"); 
        }
    });

})

