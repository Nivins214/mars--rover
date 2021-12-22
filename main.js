var canvas=document.getElementById("myCanvas");
var rover_y=10;
var rover_x=10;

ctx=canvas.getContext("2d");

var rover_width=100;
var rover_height=90;

var backgroundimg="mars.jpg";
var roverimg="rover.png";

function add() {
    backgroundimgTag= new Image();
    backgroundimgTag.onload= uploadBackground
    backgroundimgTag.src=backgroundimg;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover
    rover_imgTag.src= roverimg;

}

function uploadBackground(){
    ctx.drawImage(backgroundimgTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up()
        console.log("up");
    }
    
    if(keyPressed=='40'){
        down()
        console.log("down");
    }
    
    if(keyPressed=='37'){
        left()
        console.log("left");
    }
    
    if(keyPressed=='39'){
        right()
        console.log("right");
    }
}

function up(){
    if(rover_y>0){
rover_y=rover_y-10;
console.log("when up arrow is pressed x= "+rover_x+" y= "+rover_y);
uploadBackground()
uploadrover()
    }
 
   }

function down(){
    if(rover_y<500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed x= "+rover_x+" y= "+rover_y);
        uploadBackground()
        uploadrover()
    }
}

function left(){
if(rover_x>0)
rover_x=rover_x-10;
console.log("when left arrow is pressed y="+rover_y+" x= "+rover_x);
uploadBackground()
uploadrover()
}

function right(){
    if(rover_x<700)
    rover_x=rover_x+10;
    console.log("when rigth arrow is pressed y="+rover_y+" x= "+rover_x);
    uploadBackground()
    uploadrover()
}