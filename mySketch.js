lines=["Who you love", "is the last thing that could change that.","Anyone who makes your life better", "will always be a hero in my eyes.", "And no matter what,", "I will stand beside you.", "I will defend you.", "I will love you,", "and I will always, always,", "be your father.", "You’re a miracle, Jon Kent.", "My child of two worlds.", "My Superman."]
i=0;

function preload() {
  img = loadImage('https://i.imgur.com/39NdEDt.jpeg'); // Load the image
}

function setup() {
	createCanvas(windowWidth, windowHeight);
//Try changing the initial background color
	background(3, 61, 252);
}
function draw() {
	background(3, 61, 252, 3);
  
  image(img, width / 2 - img.width / 8, height / 1.5 - img.height / 8, img.width / 4, img.height / 4);
  
}

function mouseClicked() {
	textSize(random(15,20));
	textFont("Tahoma");
	textAlign(CENTER, CENTER);
	fill("white");
	text(lines[i], mouseX, mouseY);
	if (i<(lines.length-1)) {
		i++;
	}
	else {
		i=0;
	}
}