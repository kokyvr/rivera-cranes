import { createElement, createIcon, renderList } from "../render-utils.js";

const contactDetails = [
  {
    title: "WhatsApp",
    lines: ["+51 994 777 644"],
    icon: "fa-brands fa-whatsapp"
  },
  {
    title: "Correo",
    lines: ["jerry.riveracranes@gmail.com"],
    icon: "fa-solid fa-envelope"
  },
  {
    title: "Horario",
    lines: ["Atención las 24 horas"],
    icon: "fa-solid fa-clock"
  }
];

export function renderContact() {
  renderList("contact-grid", contactDetails, ({ title, lines, icon }) => {
    const card = createElement("div", "contact-card");
    const description = createElement("p");

    lines.forEach((line, index) => {
      if (index > 0) {
        description.append(document.createElement("br"));
      }

      description.append(document.createTextNode(line));
    });

    card.append(
      createIcon(icon),
      createElement("h3", "", title),
      description
    );
    return card;
  });
}
