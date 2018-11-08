// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// Ninja should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 Health to the Ninja

function Ninja(name){
        let speed = 3;
        let strength =3;
        this.name = name;
        this.health = 100;

        this.showNinja = function(){
            console.log("Name:"+this.name+",Health:"+this.health+",Speed:"+speed+",Strength:"+strength);
            return this;
        };
    };
    Ninja.prototype.sayName = function(){
        console.log("My name is "+this.name)
        return this;
    };

    Ninja.prototype.drinkSake = function(){
        this.health += 10;
        return this;
    };

    const ninja1 = new Ninja("Kayabusa");
    ninja1.showNinja();
    ninja1.drinkSake();
    ninja1.showNinja();

