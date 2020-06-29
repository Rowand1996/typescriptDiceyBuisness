"use strict";
var diceArray = [];
var Die = /** @class */ (function () {
    function Die(value) {
        var _this = this;
        this.roll = function () {
            _this.div.classList.remove("die" + _this.value);
            _this.value = Math.floor(Math.random() * (_this.max - _this.min)) + _this.min;
            _this.div.classList.add("die" + _this.value);
        };
        this.value = value;
        this.min = Math.ceil(1);
        this.max = Math.floor(7);
        var square = document.createElement('div');
        square.classList.add("square");
        this.div = square;
        this.roll();
        $(".squareBox").append(square);
        square.addEventListener("click", function () {
            _this.roll();
        });
        square.addEventListener("dblclick", function () {
            var thisDie = _this;
            $(_this.div).fadeOut("slow", "swing", function () {
                thisDie.div.remove();
                var elementToRemove = diceArray.indexOf(thisDie);
                diceArray.splice(elementToRemove, 1);
            });
        });
    }
    return Die;
}());
var createDie = function (value) {
    var die = new Die(value);
    diceArray.push(die);
};
var rollDice = function () {
    for (var _i = 0, diceArray_1 = diceArray; _i < diceArray_1.length; _i++) {
        var die = diceArray_1[_i];
        die.roll();
    }
};
var sumDice = function () {
    var total = 0;
    for (var _i = 0, diceArray_2 = diceArray; _i < diceArray_2.length; _i++) {
        var die = diceArray_2[_i];
        total += die.value;
    }
    $("#sumAlert").text("The sum of all dice is " + total + "!");
    $(".alert").css("display", "block");
    setTimeout(function () {
        $('.alert').fadeOut('slow');
    }, 2000);
};
