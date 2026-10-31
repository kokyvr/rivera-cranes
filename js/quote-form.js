import { createElement } from "./render-utils.js";

const serviceFields = {
  telescopica: {
    label: "Capacidad requerida",
    options: [
      "10 TN",
      "16 TN",
      "20 TN",
      "25 TN",
      "30 TN",
      "40 TN",
      "50 TN",
      "Más de 50 TN"
    ]
  },
  articulada: {
    label: "Capacidad requerida",
    options: ["5 TN", "10 TN", "15 TN", "20 TN", "Otra capacidad"]
  },
  transporte: {
    inputs: ["Tipo de carga", "Peso aproximado"]
  },
  trailer: {
    inputs: ["Tipo de carga", "Peso aproximado"]
  },
  cama: {
    inputs: ["Tipo de maquinaria", "Peso aproximado"]
  }
};

function createCapacityField(labelText, options) {
  const fieldLabel = createElement("label", "", labelText);
  fieldLabel.htmlFor = "capacidad-requerida";

  const select = createElement("select");
  select.id = "capacidad-requerida";

  const placeholder = createElement("option", "", "Seleccione toneladas");
  placeholder.value = "";
  select.append(placeholder);

  options.forEach((value) => {
    const option = createElement("option", "", value);
    option.value = value;
    select.append(option);
  });

  return [fieldLabel, select];
}

function createTextFields(placeholders) {
  return placeholders.map((placeholder) => {
    const input = createElement("input");
    input.type = "text";
    input.placeholder = placeholder;
    return input;
  });
}

export function initializeQuoteForm() {
  const serviceSelect = document.getElementById("servicio");
  const extraFields = document.getElementById("extra-fields");

  if (!serviceSelect || !extraFields) {
    return;
  }

  serviceSelect.addEventListener("change", () => {
    const configuration = serviceFields[serviceSelect.value];

    if (!configuration) {
      extraFields.replaceChildren();
      return;
    }

    const fields = configuration.options
      ? createCapacityField(configuration.label, configuration.options)
      : createTextFields(configuration.inputs);

    extraFields.replaceChildren(...fields);
  });
}
