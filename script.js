import { renderAbout } from "./js/components/about.js";
import { renderCommitments } from "./js/components/commitments.js";
import { renderContact } from "./js/components/contact.js";
import { renderGallery } from "./js/components/gallery.js";
import { renderQuoteBenefits } from "./js/components/quote-benefits.js";
import { renderServices } from "./js/components/services.js";
import { initializeQuoteForm } from "./js/quote-form.js";
import { initializeUi } from "./js/ui.js";

async function loadComponents() {
  const componentSlots = document.querySelectorAll("[data-component]");

  await Promise.all(
    Array.from(componentSlots, async (slot) => {
      const componentName = slot.dataset.component;
      const response = await fetch(`components/${componentName}.html`);

      if (!response.ok) {
        throw new Error(
          `No se pudo cargar el componente "${componentName}": ${response.status}`
        );
      }

      slot.innerHTML = await response.text();
    })
  );
}

try {
  await loadComponents();

  renderAbout();
  renderServices();
  renderCommitments();
  renderGallery();
  renderQuoteBenefits();
  renderContact();
  initializeQuoteForm();
  initializeUi();
} catch (error) {
  console.error(error);
  const errorNotice = document.getElementById("component-load-error");

  if (errorNotice) {
    errorNotice.hidden = false;
    errorNotice.textContent =
      "No se pudieron cargar las secciones. Abre start-local.bat para ver el sitio localmente, o visita el despliegue de Vercel.";
  }
}
