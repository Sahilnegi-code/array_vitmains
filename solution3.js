const obj = require('./obj')
const sol2 = () =>{
    let arr = []
     obj.map((elem) =>{
        const tempVitamins = elem.contains.split(",");
        const vitamins = tempVitamins.map((curr)=>{
            return curr.trim();
        }) 

        if( vitamins.includes('Vitamin A') ){
            arr.push(elem);
        }
    })
    return arr;
}
console.log(sol2());