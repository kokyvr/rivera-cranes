export function createElement(tagName, className = "", text) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}

export function createIcon(className) {
  const icon = createElement("i", className);
  icon.setAttribute("aria-hidden", "true");
  return icon;
}

export function renderList(containerId, items, createItem) {
  const container = document.getElementById(containerId);

  if (container) {
    container.replaceChildren(...items.map(createItem));
  }
}
