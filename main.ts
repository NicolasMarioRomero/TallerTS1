import { Serie } from "./serie.js";
import { series } from "./data.js";

let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioDiv: HTMLElement = document.getElementById('season-average')!;

renderSeriesInTable(series, seriesTbody);

promedioDiv.innerHTML = `Seasons average: ${calcularPromedioTemporadas(series)}`;

function renderSeriesInTable(series: Serie[], seriesTbody:HTMLElement): void {

    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${serie.id}</td>
                             <td>${serie.name}</td>
                             <td>${serie.channel}</td>
                             <td>${serie.seasons}</td>`;
      seriesTbody.appendChild(trElement);
    });
  }

function calcularPromedioTemporadas(series: Serie[]): number {
    let totalSeasons = 0;
    series.forEach((serie) => totalSeasons += serie.seasons);
    return totalSeasons / series.length;
  }

  