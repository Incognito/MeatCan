displayItems.add(
    "gameBoard",
    function(context, position, style) {
        //TODO: Use function that drops 'this' keyword to contain context.
        //var context = this.context;

        context.fillStyle = "rgba(0, 0, 200, 0.1)";
        context.fillRect(0, 0, 400, 400);
    }
);
