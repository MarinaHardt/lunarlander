let farbeH = "#d3a0f5";
let farbeB = "#ffffff";
let yFall = 0; // fallen
let state = 0; // start des spiels
let s = 0; // geschwindigkeit
let v = 0.1; // beschleunigung

function buttonStart() {
  if (
    mouseIsPressed &&
    mouseX >= 200 &&
    mouseX <= 400 &&
    mouseY >= 200 &&
    mouseY <= 280
  ) {
    fill("#ac6dd5");
    yFall = -50;
    state = 1;
  } else {
    fill(farbeB);
  }

  stroke(farbeH);
  rect(200, 200, 200, 80);

  noStroke();
  fill(farbeH);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("S T A R T", 300, 240);
  textSize(10);
  text("PRESS 'UP KEY' TO STEER SHIP", 300, 295);
}

function buttonRestart() {
  // farbe des buttons
  if (
    mouseIsPressed &&
    mouseX >= 200 &&
    mouseX <= 400 &&
    mouseY >= 200 &&
    mouseY <= 280
  ) {
    fill("#ac6dd5");
    yFall = -50;
    state = 1;
  } else {
    fill(farbeB);
  }
  stroke(farbeH);
  rect(200, 200, 200, 80);

  noStroke();
  fill(farbeH);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("A  G  A  I  N  ?", 300, 240);

  //textSize(8);
  //text("U S E   'S P A C E'   T O   N A V I G A T E", 300, 290);
}

function rakete(yFall) {
  noStroke();
  fill(farbeH);
  ellipse(250, yFall, 20, 30);
  ellipse(250, yFall - 30, 4);
  triangle(247, yFall - 10, 250, yFall - 25, 253, yFall - 10);
  triangle(235, yFall + 15, 245, yFall - 10, 245, yFall + 10);
  triangle(265, yFall + 15, 255, yFall - 10, 255, yFall + 10);
  fill(farbeB);
  ellipse(250, yFall - 3, 10, 15);
}

function sky() {
  noStroke();
  fill(farbeH);

  //moon
  fill("rgba(227, 190, 251, 0.5)");
  circle(500, 100, 35);
  fill("rgba(227, 190, 251, 0.3)");
  circle(500, 100, 40);
  fill(farbeH);
  circle(500, 100, 30);

  //stars
  fill(farbeH);
  circle(100, 100, 1.5);
  circle(200, 110, 1.5);
  circle(110, 300, 1.5);
  circle(330, 150, 1.5);
  circle(510, 400, 1.5);
  circle(110, 130, 1.5);
  circle(570, 50, 1.5);
  circle(360, 80, 1.5);
  circle(80, 400, 1.5);
  circle(410, 30, 1.5);
  circle(460, 260, 1.5);
  circle(490, 280, 1.5);
  circle(110, 300, 1.5);
  circle(320, 380, 1.5);
  circle(330, 360, 1.5);
  circle(310, 370, 1.5);

  //ground
  rect(0, 465, windowWidth, 465);
}

function verloren() {
  // explosion
  beginShape();
  vertex(200, 465);
  vertex(170, 430);
  vertex(210, 430);
  vertex(200, 380);
  vertex(230, 400);
  vertex(270, 360);
  vertex(310, 400);
  vertex(350, 380);
  vertex(320, 430);
  vertex(345, 430);
  vertex(320, 465);
  endShape();

  // schrift
  textSize(12);
  textAlign(CENTER, CENTER);
  text("Y O U  L O S T  : (", 300, 187);
}

function gewonnen() {
  // konfetti
  for (i = 0; i < 10; i++) {
    circle(random(windowWidth), random(windowHeight), random(3, 15));
  }

  // schrift
  fill(farbeH);
  textSize(12);
  textAlign(CENTER, CENTER);
  text("Y O U  W O N  :D", 300, 187);
}

function draw() {
  background(farbeB);
  sky();

  // anfang
  if (state === 0) {
    buttonStart();
  }

  // rakete fällt
  if (state === 1 && yFall <= 450) {
    rakete(yFall);
    yFall = yFall + s;
    s = s + v;

    // taste drücken zum bremsen
    if (keyIsDown(38)) {
      s = s + v - 0.5;
    }
  }

  // spiel verloren
  if (yFall > 450 && s >= 3) {
    rakete(450);
    buttonRestart();
    verloren();
  }

  // spiel gewonnen
  if (yFall > 450 && s < 3) {
    rakete(450);
    buttonRestart();
    gewonnen();
  }
}
