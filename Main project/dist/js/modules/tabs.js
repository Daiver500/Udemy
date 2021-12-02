// TABS

const tabs = () => {
    const tabsHeader = document.querySelectorAll(".tabheader__item");
    const tabsContent = document.querySelectorAll(".tabcontent");
    const tabsHeaderParent = document.querySelector(".tabheader__items");
  
    const hideTabContent = () => {
      tabsContent.forEach((item) => {
        item.classList.add("hidden");
        item.classList.remove("show", "fade");
      });
      tabsHeader.forEach((item) => {
        item.classList.remove("tabheader__item--active");
      });
    };
  
    const showTabContent = (i = 0) => {       // i в данном случае это первый элемент массива
      tabsContent[i].classList.add("show", "fade");
      tabsContent[i].classList.remove("hidden");
      tabsHeader[i].classList.add("tabheader__item--active");
    };
  
    hideTabContent();
    showTabContent();
  
    tabsHeaderParent.addEventListener("click", (evt) => {
      const target = evt.target;
      if (target && target.classList.contains("tabheader__item")) {
          tabsHeader.forEach((item, i) => {      // i это номер элемента, который совпал
          if (target === item) {
              hideTabContent();
              showTabContent(i);       
          }
        });
      }
     });
}

module.exports = tabs;