function setup() {
  // put setup code here
  createCanvas(875,875);
  background(127);
}

function draw() {
  let scale = 400
  let x = width/2
  let y = height/2

  draweyes(x,y,scale);
}

function draweyes(x,y,scale) {
  ellipseMode(CENTER);
  //Sclera 2
  fill(255);
  ellipse(x+scale/5,y-scale/8,scale/3.4);

  //Pupil 2
  fill(0);
  ellipse(x+scale/3.8,y-scale/15,scale/35);

  //Sclera 1
  fill(255);
  ellipse(x-scale/15,y-scale/15,scale/3);

  //Pupil 1
  fill(0);
  ellipse(x,y,scale/35);


}
