import { createElement, createIcon, renderList } from "../render-utils.js";

const aboutFeatures = [
  { label: "Seguridad", icon: "fa-solid fa-shield-halved" },
  { label: "Puntualidad", icon: "fa-solid fa-clock" },
  { label: "Atención personalizada", icon: "fa-solid fa-user-check" },
  { label: "Equipos confiables", icon: "fa-solid fa-screwdriver-wrench" }
];

export function renderAbout() {
  renderList("about-features", aboutFeatures, ({ label, icon }) => {
    const feature = createElement("div");
    feature.append(createIcon(icon), createElement("span", "", label));
    return feature;
  });
}
