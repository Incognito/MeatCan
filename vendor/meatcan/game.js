var Game = (function(FPS, Hz) {
    FPS = FPS || 60;
    Hz = Hz || 300;
    
    var step = 0;

    //TODO: This doesn't keep track of z-index order.
    function draw(n) {
        var item;
        var style;
        var position = {
            x: n,
            y: n
        };

        for (item in displayItems._items) {
            if (displayItems._items.hasOwnProperty(item)) {
                displayItems.render(item, position, style);
            }
        }
    }

    function update() {

    }

    var game = function() {
        var self=this;
        var n =0;
        setInterval(function() {
            //TODO: Figure out model updating via controllers.
            update();
            n +=1;
            if (step > Math.floor(FPS/Hz)) {
                draw(n);
                step = 0;
            } else {
                step += 1;
            }
        }, 1000/Hz);
    };
    return game;
}());

