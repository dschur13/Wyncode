$(function main() {
	$('.dropdown').click(function() {
		var linkType = $(this).attr('class');

	$('.dropdown-menu').hide();
	$('.cart .dropdown-menu').show();
});
}

$(main);