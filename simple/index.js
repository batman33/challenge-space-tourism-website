const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});


const tabList = document.querySelector('[role="tablist"]');

if (tabList) {
  const tabs = tabList.querySelectorAll('[role="tab"]');

  let tabFocus = 0;

  tabList.addEventListener('keydown', changeTabFocus);

  tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
  });

  function changeTabFocus(e) {
    const keyDownLeft = 37;
    const keyDownRight = 39;

    if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
      tabs[tabFocus].setAttribute("tabindex", -1);

      tabFocus = e.keyCode === keyDownRight ? ++tabFocus : e.keyCode === keyDownLeft ? --tabFocus : tabFocus;
      tabFocus = tabFocus >= tabs.length ? 0 : tabFocus < 0 ? tabs.length - 1 : tabFocus;

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  }

  function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute('aria-controls');
    const targetImage = targetTab.getAttribute('data-image');

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    const activeTab = tabContainer.querySelector('[aria-selected="true"]');

    changeTab(activeTab, false);
    changeTab(targetTab, true);

    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);

    hideContent(mainContainer, 'picture');
    showContent(mainContainer, [`#${targetImage}`]);
  }

  function hideContent(parent, content) {
    parent
      .querySelectorAll(content)
      .forEach(item => item.setAttribute('hidden', true));
  }

  function showContent(parent, content) {
    parent.querySelector(content).removeAttribute('hidden');
  }

  function changeTab(tab, status) {
    tab.setAttribute("aria-selected", status);
    tab.setAttribute("tabindex", status ? 0 : -1);
  }
}
