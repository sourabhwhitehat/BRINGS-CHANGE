var form;
var database;

function setup(){
   createCanvas(530,800);

   database = firebase.database();
   
   form = new Form();
   
}

function draw(){
    background(5);
    
   textSize(20)
   fill("white");
   text("lets's Bring Some Change",145,30)

   form.show();
}