import * as three from 'three'

document.addEventListener("DOMContentLoaded", function () {
    const second3dObjectElement = document.getElementById('second3dObject');
    console.log("second#dObject from js file =>" , second3dObjectElement
    )
});

var camera , scene ;
scene = new three.Scene();
camera = new three.PerspectiveCamera(50,1,0.1,1000);
let elementById = document.getElementById("second3dObject");
console.log("elementByid =>" , elementById)
let webGLRenderer = new three.WebGLRenderer();
elementById.appendChild(webGLRenderer.domElement)




animate()
function animate(){
    requestAnimationFrame(animate)
    webGLRenderer.render(scene,camera)
}
