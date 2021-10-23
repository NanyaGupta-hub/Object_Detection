img="";
Status="";
objects=[];
function preload(){
    img= loadImage('20211007_223142.jpg');
    img= loadImage('20211007_223148.jpg');
    img= loadImage('20211007_223152.jpg');
    img= loadImage('20211007_223156.jpg');
    img= loadImage('20211007_223213.jpg');
}

function setup(){
    canvas = createCanvas (640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded(){unescape;
    console.log("Model Loaded Successfully!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw(){
    image(video, 0, 0, 380, 380);
    if(Status !=""){
            
      for (i = 0; i < objects.length; i++)  
        {
            document.getElementById("status").innerHTML = "Status : Object Detected Successfully";
            document.getElementById("objects_detected").innerHTML = "Number of objects Detected are : " + objects.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width, objects[i].height );

        }   
      
      }
}

