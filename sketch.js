const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  rect(70, 200, 50, 200);
  rect(50, 100, 15, 300);
 rect(355, 100, 15, 300);
rect(300, 200, 50, 200); 
rect(120, 250, 50, 150); 
rect(250, 250, 50, 150); 
rect(170, 280, 80, 120); 
triangle(65, 200, 95, 150, 125, 200); 
triangle(355, 200, 325, 150, 295, 200); 
triangle(170, 280, 215, 160, 250, 280);
}