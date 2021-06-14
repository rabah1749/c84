canvas=document.getElementById("myCanvas"); 
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_img="mars.jpg";
rover_img="rover.png";

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=upbackground;
    background_imgtag.src=background_img;

    rover_imgtag=new Image();
     rover_imgtag.onload=uprover;
    rover_imgtag.src=rover_img;
}

function upbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}
function uprover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);

}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    if(keypress=='38'){
        up();
    }
    if(keypress=='40'){
        down();
    }
    if(keypress=='37'){
        left();
    }
    if(keypress=='39'){
        right();
    }
}
function up(){
    if(rover_y>=0){
        rover_y-=10;
        upbackground();
        uprover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y+=10;
        upbackground();
        uprover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x-=10;
        upbackground();
        uprover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x+=10;
        upbackground();
        uprover();
    }
}