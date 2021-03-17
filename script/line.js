function addALine () {

	var x0 = document.getElementById("xi").value;
	var x1 = document.getElementById("xf").value;
	var y0 = document.getElementById("yi").value;
	var y1 = document.getElementById("yf").value;

	x0 = parseInt(document.getElementById("xi").value);
	x1 = parseInt(document.getElementById("xf").value);
	y0 = parseInt(document.getElementById("yi").value);
	y1 = parseInt(document.getElementById("yf").value);
	bline(x0,y0,x1,y1);
}

function bline(x0, y0, x1, y1) {
  var dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
  var dy = Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1; 
  var err = (dx>dy ? dx : -dy)/2;

  var singX = 0;
  var singY = 0;

  while (true) {
    createElement(x0,singX,y0);
    if (x0 === x1 && y0 === y1) break;  	
    var e2 = err;
    if (e2 > -dx) { err -= dy; x0 += sx; }
    if (e2 < dy) { err += dx; y0 += sy; }
  }

}

function createElement (x,singX,y,singY) { 
	document.getElementById("box").innerHTML+="<div class=\"pixel\" style=\"left:"+(650+(x*20))+"px;top:"+(310-(y*20))+"px;\"><center><p style=\"font-size:10px\">"+(x)+","+(y)+"</p></center></div>";
}