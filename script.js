let nhac = document.getElementById("nhac");
let nut = document.getElementById("batnhac");

if (window.location.search === "?play=1") {
    nhac.play();
}
nut.onclick = function() {
    nhac.play();
}