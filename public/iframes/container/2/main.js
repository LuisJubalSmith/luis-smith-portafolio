var _loadedImages=0,
_imageArray=new Array('bg.jpg','toast.png','toast2.png','toast3.png','toast4.png', 'toast5.png',                  
                      'spriteTxt_300x250.png',
                     );
                        

this.addEventListener('DOMContentLoaded', preloadImages);
 var _tl = new TimelineMax();

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
    .to('#toast2',.5,{opacity:1,ease:Power4.easeOut},'+=.5')
    .to('#toast3',.5,{opacity:1,ease:Power4.easeOut},'+=.2')
    .to('#toast4',.5,{opacity:1,ease:Power4.easeOut},'+=.2')
    .to('#toast5',.5,{opacity:1,ease:Power4.easeOut},'+=.2')
    .to('#bite1',.5,{opacity:1,ease:Power4.easeOut},'+=.2')
    .to(['#toast2', '#toast3', '#toast4','#toast5','#toast'],0,{opacity:0,ease:Power4.easeOut},'+=.4')
    .to('#txt1',0,{opacity:1,ease:Power4.easeOut},'-=.3')
    .to('#bite1',0,{opacity:0,ease:Power4.easeOut},'+=.7')
    .to('#bite2',.5,{opacity:1,ease:Power4.easeOut},'-=.5')
    .to('#bite2',.5,{opacity:0,ease:Power4.easeOut},'+=.7')
     .to('#txt1',.5,{opacity:0,ease:Power4.easeOut},'+=1.5')
    .to(['#txt2','#disclaimer'],.5,{opacity:1,ease:Power4.easeOut},'-=.2')
    
    .to('#Frame1',.5,{left:-300,ease:Power4.easeOut},'+=1.3')
    .to('#Frame2',.5,{opacity:1, ease:Power4.easeOut},'-=1')
    .to('#shine',.5,{opacity:1, ease:Power4.easeOut, backgroundPosition:"180px 0px"},'+=1')
    .fromTo('#shimmer',2,{left:-180,top:0},{left:180, top:0, ease: Power4.easeOutx});
    ;
    
    
}

function actionsButton(){
    _btnExit.addEventListener('mouseover', function(){ TweenMax.fromTo('#shine',.05,{ backgroundPosition:"-300px 0px"},{backgroundPosition:"180px 0px", backgroundRotation:5, })});
    _btnExit.addEventListener('mouseout', function(){ TweenMax.to('#shine',.05,{ backgroundPosition:"-180px 0px"},{backgroundPosition:"180px 0px", backgroundRotation:5, })});
    
   
}