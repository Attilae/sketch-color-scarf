let t = 0;

function setup() {
	createCanvas((W = 720), W);
	background(255, 0.1);
}

function draw() {
	t += 0.02;
	colorMode(HSB);
	B = blendMode;
	B(BLEND);
	for (x = 360; x < 380 + !(X = x) + (Y = 0); x += 2) {
		for (d = 0; d++ < 65; ) {
			stroke((noise((A = x / 99), d / 50 - t) * W) % 360, 80, W, 0.1);
			line(
				X,
				Y,
				(X += ((noise(Y / 99 - t, A) - 0.5) * Y) / 11),
				(Y += 22 * noise(A + t / 4))
			);
		}
	}
}

function keyPressed() {
	t += 2.04;
	if (keyCode === UP_ARROW) {
		clear();
	}
}
