import $ from 'jquery';
import 'what-input';
window.$ = $;

//require('foundation-sites');
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

window.fadeIn = function(obj) {
  $(obj).fadeIn(1000);
};

$(document).foundation();

function f( jQuery ) {
  
  var $body       = $('body'),
      $close      = $('#form-control-close'),
      $open       = $('#form-control-open'),
      $container  = $('#form-container'),
      $fname      = $('#inputFname');
  
  $body.removeClass('no-js');
  
/* ========================
   ======================== Swap Images
   ===================== */
  
  var width = window.innerWidth || document.documentElement.clientWidth;
  if (width >= 1024) {
    swap();
  }
  
  $(window).resize(function() {
    var width = window.innerWidth || document.documentElement.clientWidth;
    if (width >= 1024) {
      swap();
    } else {
      swapBack();
    }
  });
  
  function swap() {
    $('.shape').each(function() {
      var oldSrc = $(this).attr('src');
      var newSrc = oldSrc.replace('-sm','-lg');
      if (newSrc !== oldSrc) {
        $(this).attr('src', newSrc);
      }
    });
  }

  function swapBack() {
    $('.shape').each(function() {
      var oldSrc = $(this).attr('src');
      var newSrc = oldSrc.replace('-lg','-sm');
      if (newSrc !== oldSrc) {
        $(this).attr('src', newSrc);
      }
    });
  }
  
/* ========================
   ======================== Handle Form Controls
   ===================== */
  
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