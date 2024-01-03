const obj = require('./obj')
const items = [{
    name: 'Orange',
    available: true,
    contains: "Vitamin C",
}, {
    name: 'Mango',
    available: true,
    contains: "Vitamin K, Vitamin C",
}, {
    name: 'Pineapple',
    available: true,
    contains: "Vitamin A",
}, {
    name: 'Raspberry',
    available: false,
    contains: "Vitamin B, Vitamin A",

}, {
    name: 'Grapes',
    contains: "Vitamin D",
    available: false,
}];

module.exports = items;
const sol4 = () =>{
    const result ={};
    obj.forEach(curr=>{
        let tempVitamins = curr.contains.split(',');
        let vitamins =  tempVitamins.map((curr)=> curr.trim());
        vitamins.forEach((vitamin)=>{
          
            if( !result.hasOwnProperty(vitamin)){
                let arr = [];
                arr.push(curr.name);
                result[vitamin] = arr; 
              
            }
            else{
                
                let tempArray = [...result[vitamin] , curr.name];
                result[vitamin]  = tempArray;
            }
        })   
    })



return result;
}
console.log(sol4());