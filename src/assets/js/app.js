import $ from 'jquery';
import 'what-input';
window.$ = $;

require('foundation-sites');
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

function f( jQuery ) {
  
  var $body       = $('body'),
      $close      = $('#form-control-close'),
      $open       = $('#form-control-open'),
      $container  = $('#form-container'),
      $fname      = $('#inputFname');
  
  
  $body.removeClass('no-js');
  
  $open.click(function(){
    $container.removeClass('closed');
  }).keydown(function(e){
    if(e.which == '13' ||
       e.which == '32'){
      $(this).click();
      e.preventDefault();
      e.stopPropagation();
    }
  });
  
  $fname.focus(function(){
    $container.removeClass('closed');
  });
  
  $close.click(function(){
    $container.addClass('closed');
  }).keydown(function(e){
    if(e.which == '13' ||
       e.which == '32'){
      $(this).click();
      e.preventDefault();
      e.stopPropagation();
    }
  });
  
  $container.keydown(function(e){
    if(e.which == '27'){
      $container.addClass('closed');
      $open.focus();
    }
  });
  
}

$(document).ready(f);