//size needs to be 462 x 140
function init() {
	var canvas = document.getElementById("game_canvas");
	var context = canvas.getContext('2d');
	var spriteSheet = new Image();
	spriteSheet.onload = function(){
		context.drawImage(spriteSheet, 324, 0, 462, 140, 0, 0, 462, 140);
		//canvas.drawImage(spriteSheet, sx, sy, 18, 18, 0, 0 462, 140);
	};
	spriteSheet.src = 'pacman10-hp-sprite.png';
}