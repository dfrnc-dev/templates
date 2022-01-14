window.addEventListener("load", () => {

    if (sessionStorage.getItem('showPreloader') == "false") {
        gsap.set(".container_animation", { autoAlpha: 0 })
        gsap.set("body", { overflow: "auto" })
    } else {
        loaderFun()
        sessionStorage.setItem('showPreloader', 'false')
    }
})

function loaderFun() {
    // loader init and animation
}