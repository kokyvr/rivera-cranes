import { createElement, createIcon, renderList } from "../render-utils.js";

const services = [
  {
    title: "Grúas Telescópicas",
    description:
      "Equipos para maniobras de izaje con diferentes capacidades para proyectos industriales y de construcción.",
    icon: "fa-solid fa-crane"
  },
  {
    title: "Grúas Articuladas",
    description:
      "Soluciones para trabajos de carga, descarga y elevación en espacios con acceso limitado.",
    icon: "fa-solid fa-industry"
  },
  {
    title: "Servicio de Transporte",
    description:
      "Transporte seguro de maquinaria, estructuras y diferentes tipos de carga.",
    icon: "fa-solid fa-truck"
  },
  {
    title: "Alquiler de Tráiler",
    description:
      "Unidades disponibles para el traslado de carga pesada con total seguridad.",
    icon: "fa-solid fa-truck-ramp-box"
  },
  {
    title: "Alquiler de Cama Baja",
    description:
      "Transporte especializado para maquinaria pesada y equipos de gran tamaño.",
    icon: "fa-solid fa-gears"
  }
];

export function renderServices() {
  renderList("services-grid", services, ({ title, description, icon }) => {
    const card = createElement("article", "service-card");
    const iconContainer = createElement("div", "service-icon");
    iconContainer.append(createIcon(icon));
    card.append(
      iconContainer,
      createElement("h3", "", title),
      createElement("p", "", description)
    );
    return card;
  });
}
