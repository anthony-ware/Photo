$(document).ready(function(){
  $('button').on('click', function(){
    $(this).removeClass('selected');
    $(this).addClass('selected');
    //API url
    let url='https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
    //Holds the data for the button's text
    let topic =$(this).text();
    // Data 
    let flickrOptions= {
      tags:topic,
      format:"json"
    };
    //Callback function
    function displayPhotos(data){
      let photoHTML='<ul>';
      
      $.each(data.items, function(i,photo){
        
        photoHTML+= '<div><li>';
        photoHTML+= '<a href="' +photo.link+'" class="image">';
        photoHTML+= '<img src= "' +photo.media.m +'"></a></li></div>';
      });
      photoHTML+= '</ul>';
      $('#photos').html(photoHTML);
    
    }
    
   
    $.getJSON(url,flickrOptions,displayPhotos);
  })
})