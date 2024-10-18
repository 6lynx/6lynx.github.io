document.addEventListener("DOMContentLoaded", function () {
    var icon = document.getElementById("icon");

    if (localStorage.getItem("dark-theme") === "true") {
        document.body.classList.add("dark-theme");
        icon.src = "images/sun.png"; 
    } else {
        icon.src = "images/moon.png"; 
    }

    icon.onclick = function() {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            icon.src = "images/sun.png"; 
            localStorage.setItem("dark-theme", "true"); 
        } else {
            icon.src = "images/moon.png"; 
            localStorage.setItem("dark-theme", "false");
        }
    };
});
