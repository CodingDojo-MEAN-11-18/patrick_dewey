module.exports = function() {
    return {
        add: function(num1,num2) {
            console.log(`The sum is:`, num1 + num2);
        },
        multiply: function(num1, num2) {
            console.log(`The multiplied value is:`, num1*num2);
        },
        square: function(num1) {
            console.log(`The number squared is:`, num1*num1);
        },
        random: function(num1, num2) {
            console.log("what is random????");
        }
    }
}