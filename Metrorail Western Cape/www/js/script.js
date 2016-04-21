$(document).ready(function() {
	$(".navbar-toggle").click(function() {
		//$("#homescreen").hide( "slide", { direction: "left"  }, 2000 );		
		if($(this).data("slide") == true) {
			$( "#body" ).animate({ left: "-=250px" }, "medium" );
			$(this).data("slide", false);
		} else {
			$( "#body" ).animate({ left: "+=250px" }, "medium" );
			$(this).data("slide", true);
		}
		//alert("click");
	});	
});