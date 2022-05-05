import "./index.scss"
import "./img/test_svg/logo.png"
/**
 * outImageUrl - change image url in svg (if image save with link)
 * needContent - return content to js file
 * par - preserveAspectRatio attribute for svg
 * class - class for svg <svg class=""></svg>
 * ./img/test_svg/test.svg - path to svg in src
 */
let svgContent = require("!!svg-anim-loader?outImageUrl=./assets/img/&needContent=false&par='none'&class='test_class'!./img/test_svg/test.svg")
// console.log(svgContent);
