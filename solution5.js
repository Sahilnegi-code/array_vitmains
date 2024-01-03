const obj = require('./obj')
const sol5 = () =>{
    obj.sort((obj1 , obj2)=>{

        if(obj1.contains.split(',').length < obj2.contains.split(',').length  ){
            return -1;
        }
        else if( obj1.contains.split(',').length > obj2.contains.split(',').length ){
            return 1;
        }
        return 0;
    })
    return obj
}
console.log(sol5());