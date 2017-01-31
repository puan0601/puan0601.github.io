// sanity check
$(document).ready(function(){

console.log("app.js linked.");

var projectData = [{
  name: 'PlaceholderOne',
  url: 'www.google.com',
  img: 'http://lorempixel.com/200/200'
},
{
  name: 'PlaceholderTwo',
  url: 'www.google.com',
  img: 'http://lorempixel.com/200/200'
},
{
  name: 'PlaceholderThree',
  url: 'www.google.com',
  img: 'http://lorempixel.com/200/200'
}];


projectData.forEach(function(project,idx) {
  var $name = $( '<div class="col-xs-12 col-sm-12 col-md-4 " id='+idx+'></div>');
  var $newName = $('<h3>'+project.name+'</h3>');
  var $newURL = $('<p><a href="http://'+project.url+'">'+project.url+'</a>');
  var $newIMG = $('<img class="img-fluid" alt="project placeholder" src="'+project.img+'"></img>');
  $('.projects').append($name);
  $('#'+idx).append($newName, $newURL, $newIMG);
});
});
