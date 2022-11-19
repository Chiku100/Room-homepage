let headings = ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"];
let para = ["We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love.", "  With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using ourstore locator. Any questions? Don't hesitate to contact us today.", "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades ofexperience in this industry, we understand what customers want for their home and office."];
let images = ["./images/desktop-image-hero-1.jpg", "./images/desktop-image-hero-2.jpg", "./images/desktop-image-hero-3.jpg"];
let article = document.querySelector(".right article p");
let heading = document.querySelector(".right article h1");
let buttons = document.querySelectorAll(".buttons button");
let container = document.querySelector("nav");
buttons.forEach((button) => {
    let num = 0;
    button.addEventListener("click", (e) => {
        setTimeout(() => {
            intervalFun;
        }, 10000);

        let id = e.currentTarget.id;
        if (id == "next") {
            num++;
            if (num > 2) {
                num = 0
            }
            changeDisplay(num)
        }
        else {
            num--;
            if (num < 0) {
                num = 2
            }
            changeDisplay(num)
        }
    })
})
function changeDisplay(item) {
    article.innerHTML = para[item];
    heading.innerHTML = headings[item];
    container.style.backgroundImage = 'url(' + images[item] + ')'
}
num = 0;

let intervalFun = setInterval(() => {
    num++
    if (num > 2) {
        num = 0
    }
    changeDisplay(num);
}, 5000);
document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37:
            num--;
            if (num < 0) {
                num = 2
            }
            changeDisplay(num)
            break;
        case 39:
            num++;
            if (num > 2) {
                num = 0
            }
            changeDisplay(num)
            break;
    }
};
const modal = document.querySelector(".modal-overlay");
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector("ul.modal-container").classList.remove("navbar")
    modal.classList.remove("open-modal");
})
document.querySelector("i").addEventListener('click', () => {
    document.querySelector("ul.modal-container").classList.add("navbar")
    modal.classList.add("open-modal");
})