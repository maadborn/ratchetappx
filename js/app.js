
(function (ns, undefined) {
	"use strict";	//?

	/*	
	// private property
    var foo = "foo";

    // private method
    function speak(msg) {
        console.log("You said: " + msg);
    };

    // public property
    ns.foobar = "foobar";

    // public method
    ns.sayHello = function () {
        speak("hello world");
    };
	*/

	ns.setPlatformStylesheet = function() {
		var platformCss = document.querySelector('#ratchet-platform-stylesheet');

		if (navigator.userAgent.match(/iphone|ipad|ipod/i)) {
			platformCss.setAttribute('href', 'css/ratchet-theme-ios.css');
		} 
		else if (navigator.userAgent.match(/android/i)) {
			platformCss.setAttribute('href', 'css/ratchet-theme-android.css');
		}
	}

})(window.rax = window.rax || {});


document.addEventListener('DOMContentLoaded', function(){
	rax.setPlatformStylesheet();
});
