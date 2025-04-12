import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var promedioDiv = document.getElementById('season-average');
renderSeriesInTable(series, seriesTbody);
promedioDiv.innerHTML = "Seasons average: ".concat(calcularPromedioTemporadas(series));
function renderSeriesInTable(series, seriesTbody) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                             <td>").concat(serie.name, "</td>\n                             <td>").concat(serie.channel, "</td>\n                             <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function calcularPromedioTemporadas(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons += serie.seasons; });
    return totalSeasons / series.length;
}
