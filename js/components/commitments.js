import { createElement, createIcon, renderList } from "../render-utils.js";

const commitments = [
  {
    title: "Seguridad",
    description: "Priorizamos procedimientos seguros en cada maniobra.",
    icon: "fa-solid fa-shield-halved"
  },
  {
    title: "Puntualidad",
    description: "Cumplimos los tiempos acordados para cada servicio.",
    icon: "fa-solid fa-clock"
  },
  {
    title: "Compromiso",
    description: "Nos involucramos en cada proyecto como aliados.",
    icon: "fa-solid fa-handshake"
  },
  {
    title: "Atención Personalizada",
    description: "Brindamos asesoría de acuerdo con cada necesidad.",
    icon: "fa-solid fa-user-check"
  }
];

export function renderCommitments() {
  renderList("commit-grid", commitments, ({ title, description, icon }) => {
    const card = createElement("article", "commit-card");
    card.append(
      createIcon(icon),
      createElement("h3", "", title),
      createElement("p", "", description)
    );
    return card;
  });
}
