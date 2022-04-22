import "@assets/sass/style.sass"

import "@assets/img/test_svg/logo.png"
let svgContent = require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false!@assets/img/test_svg/test.svg")
console.log(svgContent)
