/* 
	Hi Brent!  I added feedback about your homework in Javascript comments like this one.

	Overall, fantastic job!  Your code is super clean and organized, and I love the comments 
	throughout the file describing each function.

	More feedback below.
*/

$(document).ready(function () {

	/* Set all of the event handlers */
	$('.readmore').click(showReadMoreText);
	$('.readless').click(hideReadMoreText);
	$('.learnmore').click(showLearnMoreText);



	/* Function - Slide down to show more of the article on click of "read more"
	button */

	/* 
		One note (that I haven't gone over yet, but will in Tuesday's class) about event.preventDefault:
		Some browsers will produe an error if you do not pass "event" into the function.  This doesn't
		happen in Chrome, but I have seen errors in Firefox where it will not recognize "event".  

		You just need to add it between the parenthesis after the function's name:

		function showReadMoreText(event) {
			// all the rest of your code.
		}
	*/

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

	    /* 
	    	Excellent use of the callback here!!  

	    	You can also use it in the showReadMoreText() function above - having that consistency 
	    	in your code of how you generally handle things is better form.
	    */
	    
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