import $ from "jquery";
$(function() {
	var tab = $('.tabs .tabs__items > div'); 
	tab.hide().filter(':first').show(); 
	$('.tabs .tabs__nav a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('.tabs .tabs__nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();

	$('.tabs-target').click(function(){
		$('.tabs .tabs__nav a[href=' + $(this).data('id')+ ']').click();
	});
});
