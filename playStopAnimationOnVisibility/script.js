/**
 * anim array
 */
let arrAnim = []

arrAnim.push(gsap.to("#elem1",{duration: 1,rotation:360,repeat:-1,transformOrigin:"50% 50%",ease:"none"}))
arrAnim.push(gsap.to("#elem2",{duration: 0.5,opacity: 0.5,repeat:-1,yoyo: true,ease:"sine.inOut"}))
arrAnim.push(gsap.to("#elem3",{duration: 0.5,delay:0.25,opacity: 0.5,repeat:-1,yoyo: true,ease:"sine.inOut"}))

arrAnim.push(
    gsap.timeline({repeat: -1, repeatDelay: 3})
        .to("#elem4",{duration: 0.1,scaleX:1.5,scaleY:0.1,repeat:5,rotation:-10,yoyo: true,transformOrigin:"50% 50%",ease:"sine.inOut"},)
        .to("#elem5",{duration: 0.1,repeat:3,rotation:-10,yoyo: true,transformOrigin:"50% 50%",ease:"sine.inOut"},"<")
        .to("#elem6",{duration: 0.1,repeat:3,rotation:10,yoyo: true,transformOrigin:"50% 50%",ease:"sine.inOut"},"<")
        .to("#elem7",{duration: 0.1,scaleX:1.5,scaleY:0.1,repeat:1,rotation:-10,yoyo: true,transformOrigin:"50% 50%",ease:"sine.inOut"},"+=1")
)


playStopAnim("#gHeroLump",arrAnim)



/**
 * function check visibility element on viewport
 */

function playStopAnim(elem,animArr){

    window.addEventListener("scroll",function() {

        let rect = document.querySelector(elem).getBoundingClientRect()
        let windowParamWeight = (window.innerWidth || document.documentElement.clientWidth)
        let windowParamHeight = (window.innerHeight || document.documentElement.clientHeight)
        let testElem = (

            ((rect.top >= 0) && (rect.left >= 0 && rect.left <= windowParamWeight))
            ||
            ((rect.top >= 0) && (rect.right >= 0 && rect.right <= windowParamWeight))
            ||
            ((rect.bottom >= 0 ) && (rect.left >= 0 && rect.left <= windowParamWeight))
            ||
            ((rect.bottom >= 0 ) && (rect.right >= 0 && rect.right <= windowParamWeight))

        )

        if (testElem) {
            animArr.forEach((elem) => {if (elem.paused()) {elem.play()}})
        }
        else {
            animArr.forEach((elem) => {if (!elem.paused()) {elem.pause()}})
        }
    })
}


