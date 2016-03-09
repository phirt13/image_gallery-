$(function() {
  var $mainImage = $('#main-image');
  var $thumbnailOne = $('#thumbnail-0');
  var $thumbnailTwo = $('#thumbnail-1');
  var $thumbnailThree = $('#thumbnail-2');
  var $thumbnailFour = $('#thumbnail-3');
  var $thumbnailFive = $('#thumbnail-4');
  var $thumbnailSix = $('#thumbnail-5');
  var $thumbnailSeven = $('#thumbnail-6');
  var $thumbnailEight = $('#thumbnail-7');
  var $thumbnailNine = $('#thumbnail-8');

  $thumbnailOne.click(function() {
    console.log('clicked');
    $mainImage.attr('src', 'pics/100X/regular/100X-0.jpg');
  });

  $thumbnailTwo.click(function() {
    $mainImage.attr('src', 'pics/100X/regular/100X-1.jpg');
  });

  $thumbnailThree.click(function() {
    $mainImage.attr('src', 'pics/100X/regular/100X-2.jpg');
  });

  $thumbnailFour.click(function() {
    $mainImage.attr('src', 'pics/100X/regular/100X-3.jpg')
  });

  $thumbnailFive.click(function() {
    $mainImage.attr('src', 'pics/100X/regular/100X-4.jpg')
  });

  $thumbnailSix.click(function() {
    $mainImage.attr('src', 'pics/100X/regular/100X-5.jpg')
  });

  $thumbnailSeven.click(function() {
    $mainImage.attr('src', 'pics/100X/regular/100X-6.jpg')
  });

  $thumbnailEight.click(function() {
    $mainImage.attr('src', 'pics/100X/regular/100X-7.jpg')
  });

  $thumbnailNine.click(function() {
    $mainImage.attr('src', 'pics/100X/regular/100X-8.jpg')
  });
});
