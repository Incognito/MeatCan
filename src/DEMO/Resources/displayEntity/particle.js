displayItems.add(
    "particle",
    function(context, position, style) {
        var i, radius;
        radius = style.size;

        for (i = radius; i > 1; i -= ( i/radius *4) ) {
            var alphaValue = Math.abs(i/radius- 1);
            context.beginPath();
            context.arc(position.x, position.y, i, 0, 2*Math.PI ,true);
            context.closePath();
            context.fillStyle = "rgba(" + style.r + "," + style.g + "," + style.b + "," + alphaValue +")";
            context.fill();

        }
    }
);

