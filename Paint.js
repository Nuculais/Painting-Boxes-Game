
$(document).ready( function () {

		var Color = "white";
		
	$(".colourpicker").on("click", function () {
		
		Color = $(this).css("background-color");
		
	})
		$(".rad").on("click", function () {
			
			$(this).css("background-color", Color);
									
		});
	
});