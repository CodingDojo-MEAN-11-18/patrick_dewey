// will output var is undefined

// console.log(hello);                                   
// var hello = 'world';   

// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

//returns magnet

// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

//outputs super cool

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
//     var food = 'gone';
//     console.log(food);
// }

//outputs chicken, outputs half-chicken, outputs gone

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

//mean is not a function syntax wrong

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

//genre is undefined, rock r&b disco

// dojo = "san jose"; //avoid global vars
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

// outputs san jose seattle burbank san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        // else if(dojo.students <= 0){
        //     dojo = "closed for now"; 
        // }
        // cant set dojo since it is const
        return dojo;
}