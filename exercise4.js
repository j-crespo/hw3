background(255);
noStroke();

x = 0;

while (x < 200) {
  colorMode(HSB);
  fill(181, 68, 66);
  background(255);
  ellipse(100+x, 100, 30, 30)
	x = x + 30;
}

while (x > -80) {
  colorMode(HSB);
  fill(181, 68, 66);
  background(255);
  ellipse(100+x, 100, 30, 30)
	x = x - 30;
}


