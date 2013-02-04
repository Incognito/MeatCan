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
                displayItems.render(item, {x:n+100, y:n}, style);
                displayItems.render(item, {x:n+100, y:n+100}, style);
                displayItems.render(item, {x:100, y:n}, style);
            }
        }
    }

    function update() {

    }

    var game = function() {
        var self=this;
        var n =0;
        var increment = 1;
        setInterval(function() {
            //TODO: Figure out model updating via controllers.
            update();
            if (n > 400 || n < 0) {
                increment *= -1;
            }
            n += increment;
            if (step > Math.floor(Hz/FPS)) {
                draw(n);
                step = 0;
            } else {
                step += 1;
            }
        }, 1000/Hz);
    };
    return game;
}());

