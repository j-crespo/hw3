while (true) {
  noStroke();
	colorMode(HSB);
  var h = random(140)
  fill(h, 50, 100);

  var r = random(30, 60);
	ellipse(mouseX,mouseY, r, r);
}
