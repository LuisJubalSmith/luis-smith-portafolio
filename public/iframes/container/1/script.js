// AdBegins

function listeners(){
			cta.addEventListener('mouseenter', ctaOver, false);
			cta.addEventListener( "mouseenter",  mouseOverHandler, false);
			cta.addEventListener('mouseleave', ctaOut, false);
}

		function ctaOver(){
			TweenMax.to(ctaBtnOver, .2, {delay:0, opacity:1, left:0, ease:Sine.easeIn});
			TweenMax.to(ctaBtnOver, .2, {delay:.2, opacity:0, left:300, ease:Sine.easeOut});
			TweenMax.to(ctaBtnOver, 0, {delay:.3, opacity:0, left:-300});

		}

		function ctaOut(){
		  	TweenMax.to(ctaBtnOver, .2, {delay:0, opacity:0, ease:Sine.easeIn});
		}



function startAd(){


TweenMax.set([txt1,txt2], { left:300});
TweenMax.set([cta,ctaTxt], { opacity:0});
TweenMax.set([bg,txt3], { opacity:1});






var adContainer = document.getElementById("container");


TweenMax.defaultOverwrite = "false";
document.getElementById("banner").style.visibility = "visible";

init();
listeners();


}

function init(){
    setTimeout (function(){frame1()}, 100);
}

// Animations

function frame1(){
	TweenMax.to( txt1, .3, { left:125, ease: Power4.easeOut, delay: .5});
    TweenMax.to( txt2, .3, { left:113, ease: Power4.easeOut, delay: 1});
    TweenMax.to( [cta,ctaTxt], .3, { opacity:1, ease: Power4.easeIn, delay: 1.5, onComplete:mouseEffectShine});
    

   }

	/* ---------------------------------------------------------------------------------
	 CREATE MouseOver Effects
	--------------------------------------------------------------------------------- */

	function mouseEffectShine() {
		var tl = new TimelineMax();
		tl.fromTo(shine, 0.5, {backgroundPosition:"-300px 0px"},{backgroundPosition:"300px 0px", backgroundRotation:5, delay:.2})
		return tl;
    }

    function mouseOverHandler() { 
	    mouseEffectShine(); 
    }
