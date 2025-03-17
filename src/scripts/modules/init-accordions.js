let accordions = null;
// eslint-disable-next-line no-undef
const accordionElements = document.querySelectorAll('[data-accordion="parent"]');

const importDependencies = async () => {
  const { Accordions } = await import('../vendor/accordions/accordions');

  return Accordions;
};

const initCallback = (Accordions) => {
  accordions = new Accordions();
  Object.assign(window, { accordions });
};

const initAccordions = () => {
  if (!accordionElements.length) {
    return;
  }

  importDependencies().then(initCallback);
};

export { initAccordions, accordions };
