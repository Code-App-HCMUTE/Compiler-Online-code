function TabControl(tabs=[]) {
  tabs[0].classList.add("active");
  [...tabs].map((tab) => {
    tab.onclick = () => {
      tabs.forEach((tab) => {
        if (tab.classList.contains("active")) {
          tab.classList.remove("active");
        }
      });

      tab.classList.add("active");
    };
  });
}
export default TabControl;
