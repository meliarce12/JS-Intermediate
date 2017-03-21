$(function() {
	var video = $('#firstVideo');
		duration = 0;
		currentTime = 0;
	//remove default control when JS loaded
	video[0].removeAttribute("controls");
//Play/Pause control clicked
	$('.btnPlay, .replay, #firstVideo').on('click', function() {
		if(video[0].readyState > 0) {
			if(video[0].paused) {
	        video[0].play();
	    	}
		    else {
		        video[0].pause();
		    }
		    return false;
		}
		else {
			alert ("Something went wrong when loading the video");
		}
	    
	});
	//get HTML5 video time duration
	video.on('loadedmetadata', function() {
		duration = video[0].duration;
	    $('.duration').text(duration);
	});
 
	//update HTML5 video current play time
	video.on('timeupdate', function() {
		currentTime = video[0].currentTime;
		duration = video[0].duration;
    	$('.current').text(currentTime);
    	var percentage = 100 * currentTime / duration; //in %
    	$('.timeBar').css('width', percentage+'%');
	});
	//Mute/Unmute control clicked
	$('.muted').click(function() {
	    video[0].muted = !video[0].muted;
	    return false;
	});
	video.on('ended', function() {
		$('.btnPlay').css("display", "none");
		$('.replay').css("display", "inline");
	});
});

