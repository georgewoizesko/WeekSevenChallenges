/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

 

 $(function(){

//Function creates a random number to be used with the scoring functions below
 	function rannum(){
 		return (Math.random() * 10);
 	};
 $('h1').css("text-align", "center");
 $('h2').css("text-align", "center");
//Change buttons for ease of reading
$('button')
	.css("background-color", "green")
	.css("padding", "10px")
	.css("color", "white");

//Team #1
$('.left')
	.prepend('<img src="blue.gif" width="200px" height="200px" />');
	
$('.left img')
	.css("mix-blend-mode", "multiply");
	
//Function controls score and hits counters
 	$('#teamone-shoot').click(function(){
 	
 		//If score is greater or equal to 5, the score counter is increased by one and the background changes to blue
 			if (rannum() >= 8){
 				$('#teamone-numhits').html(function(i, val){return +val+1});
 				$('body').css("background", "rgba(0,0,255,.6)"); 				
 				$('body').css("color", "white");

 				$('#goal').get(0).play();
 			}

 		//The num shots counter is increased by one on click
 			$('#teamone-numshots').html(function(i, val){return +val+1});
 	});
 
//Team #2
$('.right')
	.prepend('<img src="red.png" width="200px" height="200px" />');

$('.right img')
	.css("mix-blend-mode", "multiply");

//Function controls score and hits counters
 	$('#teamtwo-shoot').click(function(){

 		//If score is greater or equal to 5, the score counter is increased by one and the background changes to red
 			if (rannum() >= 8){
 				$('#teamtwo-numhits').html(function(i, val){return +val+1});
 				$('body').css("background", "rgba(255,0,0,.6)"); 				
 				$('body').css("color", "white");
 				$('#goal').get(0).play();
 			};

 		//The num shots counter is increased by one on click
 			$('#teamtwo-numshots').html(function(i, val){return +val+1});
 	});

//Reset Button
 	$('#reset').click(function(){

 	//Increase reset ounter by 1 when button is clicked
 		$('#num-resets').html(function(i, val){return +val+1});
 		$('#teamone-numhits').html(function(i, val){return 0});
 		$('#teamone-numshots').html(function(i, val){return 0});
 		$('#teamtwo-numhits').html(function(i, val){return 0});
 		$('#teamtwo-numshots').html(function(i, val){return 0});
 		$('body').css("background-color", "white");
 		$('body').css("color", "black");
 	});

});