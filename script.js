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
        window.open("https://salmonware.github.io/sanguine/", "_blank");
        message.textContent = "";
    }
    else if (dacode === "CMILE") {
        window.open("https://youtube.com/shorts/YENt0yNSrN8?is=WRilxMNxpb80xnYt", "_blank");
        message.textContent = "";
    } 
    else if (dacode === "") {
        message.textContent = "Aurora, Colorado";
    }
    else {
        message.textContent = "Code Invalid";
    }
    
});

//https://youtube.com/shorts/YENt0yNSrN8?is=WRilxMNxpb80xnYt