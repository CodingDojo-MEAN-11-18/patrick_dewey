function map(array, callback) {
    const results = [];

    for(let index=0; index < array.length; index++) {
        const result = callback(array[index], index, array);
        results.push(result);
    }
    return results;
}

const numArray=[1,2,3,4,5,6,7,8]

const myArray = ['cat','sheep','lion','wolf','dog']

const res = map(myArray, (element, index) => element + ' in the hat at ' +index); // ES6 way of anonymous functions



const rez = map(numArray, square)
console.log('rez', rez)


function square(num) {
    return num*num;
}
console.log('res', res)