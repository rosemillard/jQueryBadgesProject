$(function() {

  // your code will go here
  $.ajax({
     url: 'https://www.codeschool.com/users/RoseMillard',
     dataType: 'jsonp',
     success: function(response) {
      console.log('response', response);
     }
   });

});
