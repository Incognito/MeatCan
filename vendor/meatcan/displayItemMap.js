var DisplayItemMap = (function() {

    var displayItemMap = function(canvasContext) {
        var self=this;
        self.canvasContext = canvasContext;
        self._items = { };
        /*  self.items are like this:
          {
              "genericObject" : {
                  contextInjector: function() { ... },
                  zIndex: 0..n, // (ints/floats)
              }
          }
         */
    };

    displayItemMap.prototype.add = function(name, contextFunction, zIndex) {
        var self=this;
        zIndex = zIndex || 0;
        if ("undefined" === typeof self._items[name]) {
            self._items[name] = {
                contextInjector: contextFunction,
                zIndex: zIndex
            };
        }
    };

    displayItemMap.prototype.remove = function(name) {
        var self=this;

        delete self._items[name];
    };

    displayItemMap.prototype.render = function(name, position, style) {
        var self=this;
        var context = self.canvasContext;
        var displayItem = self._items[name];

        displayItem.contextInjector(context, position, style);
    };

    return displayItemMap;
}());
