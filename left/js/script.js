$(".slider").slick({
    infinite: false,
    swipe: false,
    fade: true,
    cssEase: "linear",
    speed: 1000,
    autoplaySpeed: 2000,
    arrows: false,
    autoplay: false,
  });

  window.addEventListener('wheel', function(event) {
	if (event.deltaY > 0) {
		$(".slider").slick("slickNext");
        console.log(2);
	 } else {
		$(".slider").slick("slickPrev");
        console.log(3);
	 }
});

window.addEventListener("message", function (event) {
	if (typeof (event.data) !== undefined) {
		try {
			let obj = JSON.parse(event.data);

			if (obj.scrollPos !== undefined) {
				s = obj.scrollPos;
			};

			if (obj.h !== undefined) {
				h = obj.h;
			};

			if (obj.wheelDown === true && s < 6170) {
				$(".slider").slick("slickNext");
			}
			if (obj.wheelUp === true && s !== 0) {
				$(".slider").slick("slickPrev");
			}
		} catch (event) { }
	}
}, false);
window.addEventListener('wheel', function(event) {
	let wheelDown = false;
	let wheelUp = false;
	window.addEventListener('wheel', function(event) {
		if (event.deltaY > 0) {
			// down
			//console.log('down');
			//console.log(event.deltaY);
			parent.postMessage(JSON.stringify({	wheelDown: true }), "*");
		} else {
			// up
			//console.log('up');
			//console.log(event.deltaY);
			parent.postMessage(JSON.stringify({ wheelUp: true }), "*");
		}
	});
	//wheel

});