let set=new Set()
console.log(set);

// set doesnot allow duplicate values where as map allows duplicate values 
//set has no keys it has only values
//add() is used to add element in set
set.add("phani")
set.add("kumar")
set.add("siva")
set.add("king")
set.add("siva")
console.log(set);

// forEach() used to iterate the array 
set.forEach((data)=>{
    console.log(data);
})

//values() it returns setIterator  all the values 
console.log(set.values());

//keys() 
console.log(set.keys());

//entries(): set has no keys it has only values ,it returns [value , value ] instead of [key & value ] pair
console.log(set.entries());


