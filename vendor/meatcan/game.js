var Game = (function(FPS, Hz) {
    FPS = FPS || 30;
    Hz = Hz || 300;
    
    var step = 0;

    //TODO: This doesn't keep track of z-index order.
    function draw(items) {
        var item;
        var i;
        var style;

        displayItems.render("gameBoard", {x:0, y:0}, style);
        for (i=0; i < items.length; i++) {
            displayItems.render("ball", items[i], items[i].style);
        }
    }

    function update(items) {
        var i;
        var gravitySink = {
            x:200,
            y:400,
            scalar: 100
        };

        function velocityShift(gravitySink, particle) {
            var gravity = 9.2/300; //A game second is 300 hz, gravity is 9.2 m/s square.
            var vector = particle.vector
            vector.x+=0
            vector.y+=9.2/50;
            return vector
        }

        if (items.length < 30000) {
            items.push( {
                x: 200,
                y: 350,
                age: Math.floor(Math.random()*3000)+300,
                style: {
                    r: Math.floor(Math.random()*255),
                    g: Math.floor(Math.random()*255),
                    b: Math.floor(Math.random()*255),
                    size: Math.floor(Math.random()*30)+10
                },
                vector: {
                    x: (Math.random()*100 - 50) * -1,
                    y: (Math.random()*200) * -1
                }
            });
        }
        for (i=0; i< items.length; i++) {
            
            //Euthenize particles
            items[i].age -= 1;
            if (items[i].age < 0) {
                items.splice(i, 1);
            }
            items[i].vector = velocityShift(gravitySink, items[i]);
            items[i].x += items[i].vector.x/300;
            items[i].y += items[i].vector.y/300;
        }
        return items;
    }

    var game = function() {
        var self=this;
        var increment = 1;
        var items = [];
        setInterval(function() {
            //TODO: Figure out model updating via controllers.
            //TODO: Get away from passing items around
            items = update(items);
            if (step > Math.floor(Hz/FPS)) {
                draw(items);
                step = 0;
            } else {
                step += 1;
            }
        }, 1000/Hz);
    };
    return game;
}());

