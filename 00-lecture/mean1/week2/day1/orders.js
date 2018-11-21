function orderSupplies(item, callback) {
    let warehouse; // undefined
    const deliveryTime = Math.random() * 3000;


    setTimeout(function() {
        warehouse = {
            paint: {
                product: "Neon Green Paint",
                directions: function() {return 'Mix it!'}
            },
            brush: {
                product: 'Horsehair Brush',
                directions: function() { return 'start painting'}
            },
            tarp: {
                product:'A large tarp',
                directions: function() {return 'Cutting the cloth'}
            }
        };

        callback(warehouse[item]);
    }, deliveryTime);
}

function recievedItem(item) {
    setTimeout(function() {
    console.log(`Received ${item.product}, time to ${item.directions()}`);
    },4000);


}
// let havePaint = false;

// orderSupplies('paint', recievedItem)
// orderSupplies('brush', recievedItem)
// orderSupplies('tarp', recievedItem)

// orderSupplies('brush', handleBrush);

// function handleBrush(item) {
//     console.log('Checking for paint')
//     if (havePaint) {
//         return recievedItem(item);
//     }

//     setTimeout( handleBrush, 50, item);
// }
// const things = ['tarp','paint', 'brush'];
// function order(items) {
//     const received = [];

//     for(let index = 0; index <items.length; index++){
//         const item = items[index];
//         console.log('item is =>', item);

//         orderSupplies(item, function(content) {
//             // console.log(content);

//             received[index] = content;
//             console.log("recieved is", received)

//             if(received.filter(element => element).length === items.length) {
//                 received.forEach(recievedItem);
//             }
//         })
//     }
// }

// order(things);

const paint = new Promise(function(resolve, reject) {
    // console.log(resolve, reject);

    orderSupplies('paint', resolve);

});

const brush = new Promise(function(resolve, reject) {
    // console.log(resolve, reject);

    orderSupplies('brush', resolve);

});
console.log(paint)

paint
    .then(function (item) {
        recievedItem(item)
        brush
        .then(function (item) {
            recievedItem(item)
        })
    })
    .catch(function (error) {
        console.log(error);
    });
    