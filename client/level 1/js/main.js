function reqPosts(response) {
  $('.js-show').html('');
  var posts = response, count = 0;
  posts.forEach(function(e) {
    count++;
    if(count <= 5){
      $('.js-show').append('<p>'+e.title.rendered+'</p>');
    }
  });
}

function reqCategories(response) {
  $('.js-show').html('');
  var posts = response, count = 0;
  for(var i = 0; i < posts.length;i++){
    for(var j = 0; j < posts[i].categories.length;j++){
      if(posts[i].categories[j] === 7){
        count++;
        if(count <= 5){
          $('.js-show').append('<p>'+posts[i].title.rendered+'</p>');
        }
        break;
      }
    }
  }
}

function request(route) {
  $('.js-show').html('<p>Loading...</p>');
  $.ajax({
    url: route,
    method: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function(response) {
      console.log(response);
    },
    error: function(err) {
      console.log(err);
    },
  });
}

$(document).ready(function() {

  $('.js-getPost').on('click',function() {
    request("https://demo.worona.org/wp-json/wp/v2/posts?_jsonp=reqPosts");
  });

  $('.js-getGadgetPost').on('click',function() {
    request("https://demo.worona.org/wp-json/wp/v2/posts?_jsonp=reqCategories");
  });

});
