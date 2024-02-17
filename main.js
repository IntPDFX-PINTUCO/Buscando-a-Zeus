ia=ml5.imageClassifier("model.json",listo)
Webcam.set({width:640, height:480})
Webcam.attach("#camara")
function tomarfoto() {
    console.log("Tomando Foto");
    Webcam.snap(function(dirección){
        document.getElementById("fotocaptura").innerHTML='<img id="foto" src="'+dirección+'"/>'
        document.getElementById("camara").style.display="none"
        document.getElementById("analizar").style.display="block"
    })
}
function analizar() {
    ia.classify(document.getElementById("foto"),resultado)
}
function listo() {
 console.log("modelo ok");
}
function resultado(error,respuesta) {
 if (error) {
    console.log(error)
 } else {
    console.log(respuesta)
    for (let objeto = 0; objeto < respuesta.length; objeto++) {
        label=respuesta[objeto].label
        confidence=respuesta[objeto].confidence
        confidence=Math.round(confidence*100)
        document.getElementById("resultado").innerHTML+=label+" "+confidence+"%<br>"
        
    }
 }
}