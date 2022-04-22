const fs = require('fs')
const parse = require('svg-parser');

module.exports = function(content) {
    const options = this.getOptions();
    let tempC = '';
    let svgContent = content
    let svgDom = parse.parse(content)
    let tempId = svgDom.children[0].properties.id ? svgDom.children[0].properties.id : "giveNameLayerSvg_";

    function parseSvgElem(elem){
        if(elem.children.length-1 >= 0){
            elem.children.forEach(function (elemChild) {
                if(
                    elemChild.tagName == "linearGradient" ||
                    elemChild.tagName == "radialGradient" ||
                    elemChild.tagName == "clipPath" ||
                    elemChild.tagName == "mask"
                ){
                    let newName = tempId + "_" + elemChild.properties.id;
                    svgContent = svgContent.replace(new RegExp(`"${elemChild.properties.id}"`, "g"),`"${newName}"`)
                    svgContent = svgContent.replace(new RegExp(`="url\\(#${elemChild.properties.id}\\)"`, "g"),`="url(#${newName})"`)
                    svgContent = svgContent.replace(new RegExp(`xlink:href="#${elemChild.properties.id}"`, "g"),`xlink:href="#${newName}"`)
                }
                if(elemChild.tagName == "image"){
                    if(!elemChild.properties['xlink:href'].includes(`data:`)) {
                        let tempArr = elemChild.properties['xlink:href'].split("/")
                        svgContent = svgContent.replace(
                            new RegExp(`xlink:href="${elemChild.properties['xlink:href']}"`, "g"),
                            `xlink:href="${options.outImageUrl+tempArr[tempArr.length - 1]}"`
                        );
                    }
                }
                if (elemChild.properties['id']) {
                    let tempId = elemChild.properties['id'];
                    if ((tempId[0] == '_' && tempId[1] == 'x' && tempId[2] == '2') || (tempId[0] == '_' && tempId[1] == '-')) {
                        if (tempId[0] == '_' && tempId[1] == '-') tempId = tempId.slice(3)
                        else tempId = tempId.slice(6)

                        let tempClassList = '';
                        do {
                            if (tempId[0] == '.') {
                                tempClassList += ' '
                                tempId = tempId.slice(1)
                            }
                            if (tempId[0] == '-') {
                                break;
                            }

                            tempClassList += tempId.slice(0, 1)
                            tempId = tempId.slice(1)

                        } while (tempId.length > 0)
                        svgContent = svgContent.replace(
                            new RegExp(`id="${elemChild.properties['id']}"`, "g"),
                            `id="${elemChild.properties['id']}" class="${tempClassList}"`
                        );
                    }
                }
                parseSvgElem(elemChild)
            })
        }
    }
    if(svgDom.children[0].properties["data-content"] == undefined){
        parseSvgElem(svgDom)
        svgContent = svgContent.replace(/<svg /g,`<svg data-content="changed" `)
        if(tempC != svgContent) {
            try {
                fs.writeFileSync(this.resourcePath, svgContent)
                //file written successfully
            } catch (err) {
                console.error(err)
            }
            tempC = svgContent
        }
    }
    svgContent = JSON.stringify(svgContent)
    if(options.needContent == "true")
        return `module.exports = ${svgContent};`;
    else
        return "";
};


