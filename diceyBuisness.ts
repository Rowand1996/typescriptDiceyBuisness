let diceArray:any[] = [];

class Die {
    min:number;
    max:number;
    div:HTMLElement;
    value:number;
    constructor(value:any) {
        this.value = value;
        this.min = Math.ceil(1);
        this.max = Math.floor(7);

        let square = document.createElement('div');
        square.classList.add("square");

        this.div = square;
        this.roll();
        $(".squareBox").append(square);

        square.addEventListener("click", () => {
            this.roll();
        });
        square.addEventListener("dblclick", () => {
            let thisDie = this;
            $(this.div).fadeOut("slow","swing",function(){
                thisDie.div.remove();
                let elementToRemove = diceArray.indexOf(thisDie);
                diceArray.splice(elementToRemove,1);
            });
        });

    }

    roll = () => {
        this.div.classList.remove("die" + this.value);
        this.value = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        this.div.classList.add("die" + this.value);
    }
}

let createDie = (value:number) => {
    let die = new Die(value);
    diceArray.push(die);
}

let rollDice = () => {
    for (const die of diceArray) {
        die.roll();
    }
}

let sumDice = () => {
    let total = 0;
    for (const die of diceArray) {
        total += die.value;
    }
    $("#sumAlert").text(`The sum of all dice is ${total}!`);
    $(".alert").css("display","block");
    setTimeout(function() {
        $('.alert').fadeOut('slow');}, 2000
      );
}
