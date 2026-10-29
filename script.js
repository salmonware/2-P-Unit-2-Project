const button = document.getElementById("button");
const input = document.getElementById("input");
const message = document.getElementById("message");

button.addEventListener("click", (e) => {
    e.preventDefault();

    const dacode = input.value.trim().toUpperCase();

    if (dacode === "ENCOUNTER") {
        window.open("https://en.wikipedia.org/wiki/Deer", "_blank");
        message.textContent = "";
    } 
    else if (dacode === "TRIANGLE") {
        window.open("https://en.wikipedia.org/wiki/Pyramid_scheme", "_blank");
        message.textContent = "";
    }  
    else if (dacode === "COLORADO") {
        message.textContent = "Aurora, Colorado";
    } 
    else if (dacode === "ATTENTION") {
        window.open("https://www.youtube.com/watch?v=CE3yWK9LiCo", "_blank");
        message.textContent = "";
    } 
    else if (dacode === "TRACKER") {
        window.open("http://127.0.0.1:3000/stare.html", "_blank");
        message.textContent = "";
    } 
    else {
        message.textContent = "Code Invalid";
    }
});