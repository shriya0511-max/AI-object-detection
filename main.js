

function setup(){
    canvas=createCanvas(480,380)
    canvas.center()
}

function draw(){
    image(video,0,0,480,380)
}

function start(){
    var x = ""
    x=document.getElementById("input_box").value
    objectDetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="Status:Detecting Objects"
}

function modelLoaded(){
    console.log("modelLoaded!")
}