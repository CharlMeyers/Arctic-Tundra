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

	$(".priceSelect").change(function() {
		if($("#from").val() != null && $("#to").val() != null)
			$("#price").html("Price: R7.50");
	});

	$(".timetable").change(function() {
		if($("#from").val() != null && $("#to").val() != null)
			$("#showResult").show();
	});
});