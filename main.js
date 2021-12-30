video=""
status=""
objects=[]
value_from_input_box=""
results=[]

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
}

function draw(){
    image(video,0,0,300,300)

    if(status !="")
    {
        objectDetector.detect(video, gotResults)
        for(i=0; i<objects.length;i++)
        {
            document.getElementById("status").innerHTML ="Status : Detected Objects"
            

            fill("#FF0000")
            percent=floor(objects[i].confidence*100)
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15)
            noFill()
            stroke("#FF0000")
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)

            if(objects[i].label==value_from_input_box){
                video.stop()
                document.getElementById("detecting_objects").innerHTML=value_from_input_box+" found"
                objectDetector.detect(gotResults)
            }
            else
            {
                document.getElementById("detecting_objects").innerHTML=value_from_input_box+" Not found"
            }
        }
         
    }
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="Status : Detecting Objects"
    value_from_input_box = document.getElementById("input_box").value;
}

function modelLoaded(){
    console.log("modelLoaded!")
    status=true
    
}
function gotResults(error,results){
    if(error){
        console.log(error).label
    }

    console.log(results)
    objects=results
}