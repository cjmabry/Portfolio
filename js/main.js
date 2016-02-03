$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});

  $('.video-link').magnificPopup({type:'iframe'});

  $('.gallery').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
          delegate: 'a', // the selector for gallery item
          type: 'image',
          gallery: {
            enabled:true
          }
      });
  });
});
