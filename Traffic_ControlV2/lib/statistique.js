function StatistiqueTimer() {
    var d = new Date();
    document.getElementById("stats").innerHTML = d.toLocaleTimeString();
}