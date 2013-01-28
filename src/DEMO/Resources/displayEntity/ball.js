displayItems.add(
    "ball",
    function(context, position, style) {
        //TODO: Use function that drops 'this' keyword to contain context.
        //var context = this.context;

        context.strokeStyle= "white";
        context.beginPath();
        context.arc(position.x, position.y, 10, 0, 2*Math.PI ,true);
        context.stroke();
    }
);

