class Ninja {
    constructor(name){
        this.name = name;
        this.speed = 3;
        this.strength =3;
        this.health=100;
    }
    sayName(){
        console.log(`Hi I am a ninja named ${this.name}`);
    }
    showStats(){
        console.log(`Name: ${this.name}, Speed: ${this.speed}, Strength: ${this.speed}, Health: ${this.health}`)
    }
    drinkSake(){
        if (this.health < 100){
            this.health += 10;
            console.log(`Drinking Sake...My health has been restored to ${this.health}!`)
            
        }
        else {
            this.health =100;
            console.log(`Drinking Sake....my health is already full!`)
        }
    }
    
}
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.speed = 3;
        this.strength =3;
        this.health=100;
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log(`What one programmer can do in one month, two programmers can do in two!`)
    }
    showStats(){
        console.log(`Name: ${this.name}, Speed: ${this.speed}, Strength: ${this.strength}, Health: ${this.health}, Wisdom: ${this.wisdom}`)
    }

}
const ninja = new Ninja("Barry")
ninja.showStats()
ninja.drinkSake()
console.log(`Now showing our new sensei!`)
const sensei = new Sensei("Master Splinter")
sensei.speakWisdom()