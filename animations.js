//bouncy ball js

$('.press-me').on('click', function() {

  var duration= 1;

  TweenMax.to('.ball', duration / 4, {y:-50, ease: Power2.easeOut});
  TweenMax.to('.ball', duration / 2, {y: 0, ease: Bounce.easeOut, delay: duration/4});

//  for (var i = 1; i > 0; i++) {
//    var randomNum = Math.floor(Math.random() * 500);
//    var newBall = $('<div>');
//    newBall.addClass('ball'+ i);
//    newBall.addClass('ball');
//    $('.ball').css('left', randomNum + 'px');
//    $('body').append(newBall);
//  }
});
