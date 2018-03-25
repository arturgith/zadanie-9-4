// scripts.js
function drawTree(height) {
	for (var i = 1; i <= height; i++) {
		var star = "";
		var space = "";

		

		
		for (var k = i; k <= height; k++) {
			var space = space += ' '; 
		}
		for (var j = 1; j <= 2 * i - 1; j++) {
				var star = star += '*';
		}
		var spaceStar = space + star;
		console.log(spaceStar);
	}
			
}

drawTree(prompt("podaj wysokość choinki: "));
