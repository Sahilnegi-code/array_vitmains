const obj = require('./obj')
const sol1 = () =>{
    let arr = [];
     obj.map((elem) =>{
        if( elem.available === true) {
            arr.push(elem);
        };

    })
    return arr;
}
console.log(sol1());