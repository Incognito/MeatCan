displayItems.add(
    "ball",
    function(context, position, style) {
        var i, radius;
        radius = 30;

        for (i = radius; i > 1; i -= ( i/radius *4) ) {
            var alphaValue = Math.abs(i/radius- 1);
            context.beginPath();
            context.arc(position.x, position.y, i, 0, 2*Math.PI ,true);
            context.closePath();
            context.fillStyle = "rgba(255, 255, 255, "+ alphaValue +")";
            context.fill();

        }
    }
);

