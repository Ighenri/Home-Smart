const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener('click', () => {
    const isExpanded = JSON.parse(navBtn.getAttribute ('aria-expanded'));
    navBtn.setAttribute('aria-expanded', !isExpanded);
    menuBar.classList.toggle('hidden');
    menuBar.classList.toggle('flex')
})

















// const menu =document.querySelector("#menu");
// const menuBar = document.querySelector("#menubar");

// menu.addEventListener("click", () => {
//     if(menuBar.classList.contains("hidden")){
//         menuBar.classList.remove("hidden")
//     }else{
//         menuBar.classList.add("hidden")
//     }
// }) This can work but i av to up but flex and hidden within the class menubar