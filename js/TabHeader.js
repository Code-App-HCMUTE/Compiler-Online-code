function TabHeader() {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const buttonPractice = document.querySelector(".start");

  const tabs = $$(".tab-item");
  const panes = $$(".tab-pane");
  const cards = $$(".card");

  const tabActive = $(".tab-item.active");

  tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
      $(".tab-item.active").classList.remove("active");
      $(".tab-pane.active").classList.remove("active");

      this.classList.add("active");
      pane.classList.add("active");
    };
  });

  buttonPractice.onclick = () => {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    tabs[1].classList.add("active");
    panes[1].classList.add("active");
  };

  cards.forEach((card) => {
    card.onclick = () => {
      $(".tab-item.active").classList.remove("active");
      $(".tab-pane.active").classList.remove("active");

      tabs[2].classList.add("active");
      panes[2].classList.add("active");
    };
  });
}

export default TabHeader;
