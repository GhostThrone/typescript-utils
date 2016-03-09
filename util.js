define("interfaces", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("dictionary", ["require", "exports"], function (require, exports) {
    "use strict";
    var Dictionary = (function () {
        //Constructor
        function Dictionary() {
            this.items = {};
            this.counter = 0;
            this.indices = new Array();
        }
        //Methods
        Dictionary.prototype.add = function (k, v) {
            //Add new item to Dictionary
            this.items[this.counter] = { key: k, value: v };
            this.indices.push(this.counter);
            this.counter++;
        };
        Dictionary.prototype.getItem = function (index) {
            //Return a item from Dictionary if this do not exist return the first item
            var x = 0;
            for (var i = 0; i < this.indices.length; i++) {
                if (this.indices[i] == index) {
                    x = 1;
                    break;
                }
            }
            return (x == 1) ? this.items[index] : this.items[0];
        };
        Dictionary.prototype.hasItem = function (item) {
            //Return true if find item else return false
            var x = 0;
            for (var i = 0; i < this.len; i++) {
                if (this.items[i].key === item || this.items[i].value === item) {
                    x = 1;
                    break;
                }
            }
            return (x == 1) ? true : false;
        };
        Object.defineProperty(Dictionary.prototype, "len", {
            get: function () {
                //Rerturn length of Dictionary
                return this.counter;
            },
            enumerable: true,
            configurable: true
        });
        Dictionary.prototype.indexOf = function (item) {
            //Return index of any item if this is not find return -1
            var x = 0;
            for (var i = 0; i < this.len; i++) {
                if (this.items[i].key === item || this.items[i].value === item) {
                    x = i;
                    break;
                }
            }
            return (x != 0) ? x : -1;
        };
        return Dictionary;
    }());
    exports.Dictionary = Dictionary;
});
