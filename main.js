status = "";
dog_width = 0;
dog_height = 0;
dog_x = 0;
dog_y = 0;
cat_width = 0;
cat_height = 0;
cat_x = 0;
cat_y = 0;

function preload(){
  dog_img = loadImage("dog_cat.jpg");
}

function setup(){
  canvas = createCanvas(500, 350);
  canvas.center();
  objectDetection = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status1").innerHTML = "Detecting....";
}

function modelLoaded(){
  console.log("Model Loaded!");
  status = true;
  objectDetection.detect( dog_img, gotResults);
}

function gotResults(error, results){
  if(error){
    console.log("an error has occured");
    console.log(error);
  }
  else{
    console.log(results);
    dog_height = results[1].height;
    console.log(dog_height);
    dog_width = results[1].width;
    console.log(dog_width);
    dog_x = results[1].x;
    console.log(dog_x);
    dog_y = results[1].y;
    console.log(dog_y);
    document.getElementById("status1").innerHTML = "Objects Detected";
    cat_height = results[0].height;
    console.log(cat_height);
    cat_width = results[0].width;
    console.log(cat_width);
    cat_x = results[0].x;
    console.log(cat_x);
    cat_y = results[0].y;
    console.log(cat_y);
    document.getElementById("status1").innerHTML = "Objects Detected";

  }
}

function draw(){
  image(dog_img, 0, 0, 500, 350);
  stroke("red");
  fill("red");
  noFill();
  rect(results[1].width, results[1].height, results[1].x, results[1].y);
  rect(cat_width, cat_height, cat_x, cat_y);
  /*
  stroke("red");
  fill("red");
  noFill();
  rect(50, 30, 200, 300);
  stroke("black");
  text("Dog", 205,300);
  stroke("red");
  rect(230, 20, 210, 300);
  stroke("black");
  text("cat", 260,300);
  */
}