// function call(cb) {
//     if (typeof cb === 'function') {
//         cb()
//     }
// };

// call(function() {
//     console.log('inside of our callback')
// });



// const numArray = [123,435,943,10];


function map(array, callback) {
    const results = [];

    for (let index=0; index < array.length; index++) {
        const result= callback(array[index], index, array);
        results.push(result);
    }
    return results;
}

// console.log('num array', addArray(numArray))
// console.log('sq array', square(numArray))
// const list = map(numArray, (element) =>  element * element);

// console.log('square list', list)

// const addList = map(numArray, (number, id) => number + id);
// console.log('add List', addList)
// console.log('before');

// function sayHello(name) {
//     setTimeout(function () {
//         console.log(`Hello ${name}`);
//     }, 3000)
// }
// sayHello("Patrick")

// console.log('after');

function getThingsFromDB(query, callback) {
    setTimeout(function () {
    const data = ['thing1','thing2','thing3']
    callback(data);
    
    },5000);

}
getThingsFromDB('select * from things;', function(things) {

    console.log('running in the future!', things)

    const res = map(things, thing => thing + ' this is a thing');

    console.log(res);
});