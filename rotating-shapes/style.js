$("document").ready(function() {
	$("li:first-child").clone().prependTo("#magnified")
	.addClass("#magnified li");

	$("li").click(function() {
		$("#magnified").empty();
		$(this).clone().prependTo("#magnified")
	});
});