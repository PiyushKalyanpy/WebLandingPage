 $(this).data('song'); // getting song name from _data_ container of clicked element $(this)
        $('#myAudio').attr('src',songFileName).play(); // getting element myAudio bi its id, then setting it's src attribute and, finally, starting playback 
