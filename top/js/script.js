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