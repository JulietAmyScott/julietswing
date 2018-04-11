var texBackGround = document.getElementById('texture');

	var imageArray = [
		'images/floral.jpg',
		'images/orangepaint.jpg',
		'images/rust.jpg',
		'images/branches.jpg',
		'images/blueandred.jpg',
		'images/wood.jpg',
		'images/floral.jpg',
		'images/redrust.jpg'
	];

	var imageIndex = 0;
	var intervalHandler;
	loop();

	function loop() {
		$( "p" ).text( "CLICK ANY FRAME TO DISPLAY A TEXTURE");
		intervalHandler = setInterval(loopImage,900);
	}
	function loopImage() {
		texBackGround.setAttribute('src',imageArray[imageIndex]);
			imageIndex++;
		if (imageIndex >= imageArray.length) {
			imageIndex = 0;
		}
	}
	function imageSwitch(num) {
		$(texBackGround).attr('src', imageArray[num]);
		clearInterval(intervalHandler);
	} 

	$('.frame').click(function(){
		$( "p" ).text( "CLICK THE DEER TO CONTINUE ROTATION");
		imageSwitch(Math.floor(Math.random() * imageArray.length));
	});
 	$('#deerMountContainer').click(loop);

	 
