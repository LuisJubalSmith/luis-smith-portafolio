var _loadedImages=0,
_imageArray=new Array('sprite_300x250.png','bottomBox.png', 'topBox.png');
var _tl = new TimelineMax();

var _EP2O = Power3.easeOut,
    _EP2I = Power3.easeIn;

this.addEventListener('DOMContentLoaded', preloadImages);

function preloadImages() {
    for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener('load', trackProgress);
        _tempImage.src = _imageArray[i];
    }
}

function trackProgress(){
    _loadedImages++;             
    if(_loadedImages == _imageArray.length) init();
}

function init(){ 
    var css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', "style.css" );
    document.getElementsByTagName('head')[0].appendChild(css);

    initAnimations();
}

function initAnimations(){

     _tl
     .set(['#frontHole','#hole','#bottomBar'],{opacity:0})
      .set('#copy01',{y:-200})
      .set(['#copy02','#lunch'], {x:350})
      .set('#animal',{ y:251})
      .set('#animal2',{ y:251})
      .set('#bottomBox',{y:-134,x:0, scale:1.5})
      .set('#topBox',{y:-200,x:0, scale:1.5}) 
      .set('#lights',{scale:0}) 



   .to('#copy01',.5,{y:55, ease:_EP2O})
   .to('#animal', .3, {y:33,ease:_EP2O},"+=1")
   .to('#copy01', .3, {rotation:180, x:20,transformOrigin: "right top",ease:_EP2O},"-=.2")
   .to('#bottomBar', .3, {opacity:1, ease:_EP2O},"-=.2")
   .to('#animalHead', 1, {transformOrigin: "right bottom",rotation:3, ease:_EP2O,rotationZ:0.01, z:-0.01, force3D:true},"-=.2")
   
   .to('#topBox', .3, {y:123,scale:1, ease:_EP2O},"-=.3")
   .to('#bottomBox', .3, {y:162,scale:1, ease:_EP2O},"-=.3")
   .to('#animal', 0, {opacity:0, ease:_EP2O},"-=.2")
   
   .to(['#hole','#frontHole'], .2, {opacity:1, ease:_EP2I},"+=.1")
   .to('#animal2', .3, {y:-1, ease:_EP2O},"-=.1")
   .to('#lights', .2, {scale:1, ease:_EP2O},"-=.2")
   .to('#copy02',.3,{x:0, ease:_EP2O},"+=.2")
   .to('#lunch',.3,{x:161, ease:_EP2O},"+=.1")
}

