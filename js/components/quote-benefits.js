import { createElement, createIcon, renderList } from "../render-utils.js";

const quoteBenefits = [
  { label: "Atención personalizada", icon: "fa-solid fa-phone" },
  { label: "Atención las 24 horas", icon: "fa-solid fa-clock" },
  { label: "Servicio confiable", icon: "fa-solid fa-shield-halved" }
];

export function renderQuoteBenefits() {
  renderList("quote-items", quoteBenefits, ({ label, icon }) => {
    const item = createElement("div");
    item.append(createIcon(icon), document.createTextNode(label));
    return item;
  });
}
