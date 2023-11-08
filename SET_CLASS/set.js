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

console.log("-----------");

let map=new Map([
    ['id',101],
    ["name","king"],
    ["ids",101],
    ["ides",101]
])
console.log(map);

console.log(map.values());

let vals=[]
map.forEach((val,k,mp)=>{
    console.log(val);
    vals.push(val)
    console.log(k);
    console.log(mp);
})

console.log(vals);

let s=new Set()
s.add(vals)
console.log(s);
console.log(s.values());

