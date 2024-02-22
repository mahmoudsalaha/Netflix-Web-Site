const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    // Remove all show and border classes
	removeBorder();
    removeShow()
    //Add Border To Curent Tab item
    this.classList.add('tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    // Add show class
    tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// Remove show class from all content items
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Lisen For Tabe Click
tabItems.forEach(item => item.addEventListener('click', selectItem));

// botton using to back to header with smoth behavior 
let btn = document.getElementById("scr-beha");

window.onscroll = function () {
    if(window.scrollY >= 150) {
        btn.style.display = "block";
} else {
    btn.style.display = "none";
}
};

btn.onclick = function () {
window.scrollTo({
    top: 0,
    behavior: "smooth",
});
};






