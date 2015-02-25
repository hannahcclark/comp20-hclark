function init() {
	var canvas = document.getElementById("game_canvas");
	var context = canvas.getContext('2d');
	var spriteSheet = new Image();
	spriteSheet.onload = function(){
		context.drawImage(spriteSheet, 324, 0, 462, 140, 0, 0, 462, 140);
		context.drawImage(spriteSheet, 83, 23, 15, 15, 35, 33, 15, 15);
	};
	spriteSheet.src = 'pacman10-hp-sprite.png';
}