const container = document.getElementById("cakeContainer");

for (let i = 1; i <= 120; i++) {  // Generate 120 cakes
    let cake = document.createElement("div");
    cake.classList.add("cake");
    cake.textContent = i;  // Numbering cakes
    container.appendChild(cake);
}