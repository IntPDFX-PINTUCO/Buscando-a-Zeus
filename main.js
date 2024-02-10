//https://teachablemachine.withgoogle.com/models/TDYVIVOLE/
Webcam.set({width:600, height:480})
Webcam.attach("#camara")
function tomarfoto() {
    console.log("Tomando Foto");
    Webcam.snap(function(dirección){
        document.getElementById("fotocaptura").innerHTML='<img id="foto" src="'+dirección+'"/>'
        document.getElementById("camara").style.display="none"
        document.getElementById("analizar").style.display="block"
    })
}