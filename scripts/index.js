
setTimeout(() => {
    const hide = document.getElementById("docs");
    hide.style.display = "none";
}, 1);

function showFunc() {
    var x = document.getElementById("docs");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}