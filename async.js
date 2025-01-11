

// new placeOrder ( (resolve) =>{

//     //   asyn

//     setTimeout(()=> {
//         document.write(`Placing order for: ${order}`)
//         resolve()} , 2000)
// }) .then (()=> {

//     return new prepareOrder ((resolve)=>{
//         setTimeout(()=>{
//             document.write(`Preparing: ${order}`)
//             resolve()
//         },3000)
//     })
// }).then (()=>{
//     return new packageOrder ((resolve)=>{
//     setTimeout(()=>{
// document.write(`Packaging: ${order}`)
// resolve()
//     }, 2000)
// }).then (()=>{
//     return new deliverOrder ((resolve)=>{
//         setTimeout(()=>{
//             document.write(`Delivering: ${order}`)
//             resolve()
//         },4000)
//     })
// })
    
// })





function placeOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.write(`Placing order for: ${order}<br>`);
            resolve(order); 
        }, 2000);
    });
}

function prepareOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.write(`Preparing: ${order}<br>`);
            resolve(order); 
        }, 3000);
    });
}

function packageOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.write(`Packaging: ${order}<br>`);
            resolve(order); 
        }, 2000);
    });
}

function deliverOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.write(`Delivering: ${order}<br>`);
            resolve(); 
        }, 4000);
    });
}

placeOrder("Pizza")
    .then((order) => prepareOrder(order))
    .then((order) => packageOrder(order))
    .then((order) => deliverOrder(order))
    .then(() => {
        document.write("Order process completed successfully.<br>");
    });
