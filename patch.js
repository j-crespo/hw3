function julianPatch(x, y) {
  
		colorMode(HSB);
  	fill(0,200,240);
  	stroke(3);
  	rect(x, y, 100, 100);
  	strokeWeight (2);
  	line(x+5, y+5, x+20, y+80);
    line(x+5, y+5, x+80, y+20);
    fill(255);
  	ellipse(x+20,y+40, 15, 15);
  	ellipse(x+55,y+50, 20, 20);
    line(x+80, y+20, x+80, y+80);
    line(x+20, y+80, x+80, y+80);
  	line(x+30, y+70, x+40, y+30);
  	fill (3);
    ellipse(x+55,y+50, 10, 10);
  	ellipse(x+20,y+40, 5, 5);
  	rect(x+40,y+65, 20, 10);
 	

}

background(255);

julianPatch((width-100)/2, (height-100)/2);
