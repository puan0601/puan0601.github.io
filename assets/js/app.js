// sanity check
$(document).ready(function(){

console.log("app.js linked.");

var projectData = [{
  name: 'Portfolio',
  url: 'puan0601.github.io',
  img: 'http://lorempixel.com/200/200'
},
{
  name: 'Matching Game',
  url: '#',
  img: 'http://lorempixel.com/200/200'
},
{
  name: 'Tic-Tac-Toe',
  url: '#',
  img: 'http://lorempixel.com/200/200'
}];


projectData.forEach(function(project,idx) {
  var $name = $( '<div class="col-xs-12 col-sm-6 col-md-4 " id='+idx+'></div>');
  var $newName = $('<h3>'+project.name+'</h3>');
  var $newURL = $('<p><a href="http://'+project.url+'">'+project.name+'</a>');
  var $newIMG = $('<img class="img-fluid" alt="project placeholder" src="'+project.img+'"></img>');
  $('.projects').append($name);
  $('#'+idx).append($newName, $newURL, $newIMG);
});
});
