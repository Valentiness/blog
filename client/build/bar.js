let colors = ["#46727d", "#0f3248", "#2b2c4a", "#011933", "#170d0f", "#2c3807", "#011933"];
export function bar() {
    let bar_color = document.querySelectorAll(".menu_elem");
    let i = 0;
    for (let bar of bar_color) {
        bar.setAttribute('id', String(getRandomInt(13)));
        bar.style.background = colors[i];
        i++;
    }
}
export function event() {
    document.addEventListener("click", (event) => {
        if (event.target.className == "menu_elem") {
            removeClass();
            event.target.classList.add('active');
        }
    });
}
function removeClass() {
    let active = document.querySelectorAll(".active");
    for (let act of active) {
        act.classList.remove('active');
    }
    console.log(active);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
