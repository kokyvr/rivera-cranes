import { createElement, renderList } from "../render-utils.js";

const galleryImages = [
  {
    src: "images/image4.jpeg",
    alt: "Grúa telescópica realizando maniobra"
  },
  { src: "images/image1.jpeg", alt: "Servicio de transporte" },
  { src: "images/image2.jpeg", alt: "Equipo Rivera Cranes Group" },
  { src: "images/image3.jpeg", alt: "Proyecto de izaje" }
];

export function renderGallery() {
  renderList("gallery-grid", galleryImages, ({ src, alt }) => {
    const item = createElement("div", "gallery-item");
    const image = createElement("img");
    image.src = src;
    image.alt = alt;
    image.loading = "lazy";
    item.append(image);
    return item;
  });
}
