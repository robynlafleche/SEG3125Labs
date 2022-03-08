$(document).ready(function($){
	    
	$(".btnrating").on('click',(function(e) {
	
	$("#selected_rating").val($(this).attr("data-attr"));
	
	$(".rating").empty();
	$(".rating").html($(this).attr("data-attr")+ ' / 5');
	
    for (i = 1; i <= 5; ++i) {
        $("#rating-"+i).removeClass('btn-warning');
    }
    
	for (i = 1; i <= $(this).attr("data-attr"); ++i) {
	$("#rating-"+i).toggleClass('btn-warning');
	}
	
	
	
	}));
	
		
});