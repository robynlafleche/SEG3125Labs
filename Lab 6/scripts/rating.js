$(document).ready(function($){
	    
	$(".btnrating").on('click',(function(e) {
	
	$("#selected_rating").val($(this).attr("data-attr"));
	
	$(".rating").empty();
	$(".rating").html($(this).attr("data-attr")+ ' / 5');
	
    for (i = 1; i <= 5; ++i) {
        $("#rating-"+i).find("i").removeClass('checked');
    }
    
	for (i = 1; i <= $(this).attr("data-attr"); ++i) {
	$("#rating-"+i).find("i").toggleClass('checked');
	}
	
	
	
	}));
	
		
});