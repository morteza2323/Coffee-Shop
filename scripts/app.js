const toggleThemeBtn = document.querySelector("#toggle-theme");
const toggleThemeMobileBtn = document.querySelector("#toggle-theme-mobile");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const cartOpenBtn = document.querySelector(".cart-open-btn");
const submenu = document.querySelector(".submenu");
const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".nav-close-btn");
const cartCloseBtn = document.querySelector(".cart-close-btn");
const nav = document.querySelector(".nav");
const cart = document.querySelector(".cart");
const overlay = document.querySelector(".overlay");

toggleThemeBtn.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})

toggleThemeMobileBtn.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})

submenuOpenBtn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("text-zinc-700");
    e.currentTarget.parentElement.classList.toggle("dark:text-white");
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
    submenu.classList.toggle("submenu--open");
    submenu.classList.toggle("hidden");
})

cartOpenBtn.addEventListener("click",() => {
    cart.classList.remove("-left-64");
    cart.classList.add("left-0");
    overlay.classList.add("overlay--visible");
    cart.classList.remove("hidden");
    cart.classList.add("flex")
    cart.classList.add("flex-col")
    cart.classList.add("justify-between")
})

navOpenBtn.addEventListener("click",() => {
    nav.classList.remove("-right-64");
    nav.classList.add("right-0");
    overlay.classList.add("overlay--visible");
    nav.classList.remove("hidden")
})

function closeNav() {
    nav.classList.remove("right-0");
    nav.classList.add("-right-64");
    overlay.classList.remove("overlay--visible");
    if (!nav.classList.contains("hidden"))
        {
            nav.classList.add("hidden");
        }
}

function closeCart() {
    cart.classList.remove("left-0");
    cart.classList.add("-left-64");
    overlay.classList.remove("overlay--visible");
    if (!cart.classList.contains("hidden"))
        {
            cart.classList.add("hidden");
            cart.classList.remove("flex")
            cart.classList.remove("flex-col")
            cart.classList.remove("justify-between")
        }
}

cartCloseBtn.addEventListener("click",closeCart)
navCloseBtn.addEventListener("click",closeNav)
overlay.addEventListener("click",closeNav)
overlay.addEventListener("click",closeCart)

