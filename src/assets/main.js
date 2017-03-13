$(function() {

  $.ajax({
     url: 'https://www.codeschool.com/users/RoseMillard.json',
     dataType: 'jsonp',
     success: function(response) {
      console.log('response', response);
     }
   });

});
