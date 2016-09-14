$(function(){

//Answer to #1.
//Clicking changes the color of the text to red,
//clicking again changes the text color back to black.
$("h1").click(function(){
	
	$(this).css("color", "red");



	$("h1").click(function(){

    	$(this).css("color", "black");
	})

	
})

//Answer to #2
//Execute hide function for every odd numbered h5 tag
$("h5:odd").hide();


//Answer to #3
//For every p element, not in aside, replace bacon with LASER VISION
$('p').not("aside p").text(function(i,val){
       return val.replace("Bacon", "LASER VISION");
});

//Answer to #4
//Hide both the 5th and 6th instance of any tag using the post class
$('.post:eq(5)').hide();
$('.post:eq(6)').hide();

//Answer to #5
//Hide any image located within the asside section
$('aside img').hide();

	//all your code should go here

})
