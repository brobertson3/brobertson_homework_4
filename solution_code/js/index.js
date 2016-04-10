$(document).ready(function () {

	/* Set all of the event handlers */
	$('.readmore').click(showReadMoreText);
	$('.readless').click(hideReadMoreText);
	$('.learnmore').click(showLearnMoreText);



	/* Function - Slide down to show more of the article on click of "read more"
	button */
	function showReadMoreText () {
		event.preventDefault();
		$('.readmore').hide();
		$('#show-this-on-click').slideDown();
		$('.readless').show();
	}

	/* Function - Slide the additional text back up when the user clicks the
	Read Less button */
	function hideReadMoreText () {
		event.preventDefault();
		/* Selecting the callback argument for slideUp() allows for a smoother 
	    transistion with hiding/showing the Read Less/More text */
		$('#show-this-on-click').slideUp(function () {
			$('.readless').hide();
			$('.readmore').show();
		});
	}

	/* Function - Slide down additional text when the user selects the Read
	Less button */
	function showLearnMoreText() {
		event.preventDefault();
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	}

});