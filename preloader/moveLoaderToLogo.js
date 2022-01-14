function moveLoaderToLogo() {
    let staticLogoTaget = document.querySelector(".mainLogo");
    let preloaderTarget = document.querySelector(".preloader");
    const staticLogo = staticLogoTaget.getBoundingClientRect();
    const preloader = preloaderTarget.getBoundingClientRect();

    gsap.set(staticLogoTaget, { autoAlpha: 0 })

    let tempX = - (preloader.x - staticLogo.x)
    let tempY = - (preloader.y - staticLogo.y)
    // leveling by width
    let tempScaleX = staticLogo.width / preloader.width
    // leveling by height
    let tempScaleY = staticLogo.height / preloader.height


    gsap.timeline()
        .to(preloader, { duration: 1, x: tempX, y: tempY, scale: tempScaleX, transformOrigin: "0% 0%" })
        .set(staticLogoTaget, { autoAlpha: 1 })
        .set(preloader, { autoAlpha: 0 })
}