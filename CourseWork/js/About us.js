// javascript for vertical tab 
// selects and returns all elements with class tabs h3
let tabs = document.querySelectorAll(".tabs h3");
// selects and returns all elements with class tab-content div
let tabContents = document.querySelectorAll(".tab-content div");
// used to print the variables defined in it

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tabContents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});