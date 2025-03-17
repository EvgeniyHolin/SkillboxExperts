let tabs = null;

const tabElements = document.querySelectorAll('[data-tabs="parent"]');

const importDependencies = async () => {
  const { Tabs } = await import('../vendor/tabs/tabs');

  return Tabs;
};

const initCallback = (Tabs) => {
  tabs = new Tabs(tabElements);
  Object.assign(window, { tabs });
};

const initTabs = () => {
  if (!tabElements.length) {
    return;
  }

  importDependencies().then(initCallback);
};

export { initTabs, tabs };
