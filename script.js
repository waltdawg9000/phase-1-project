const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

document.addEventListener("click", function(event) {
    //adding the button operational
    if (!event.target.matches("#button")) return;

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => console.log(data));
});

