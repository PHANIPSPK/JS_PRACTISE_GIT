let map=new Map([
    ["id",101],
    ["name","phaniking"],
    ["highesteducation","B-tech"]
])
console.log(map);

//set() used to set values in map object
map.set("stream","mechanical engineering")
map.set("job","slap private limited ")
map.set('salary',28000)
console.log(map);

//get() used to get valuse by accessing keys
let getValue=map.get('name')
console.log(getValue);
console.log(map.get('highesteducation'));

//keys() used to get keys by the form of mapiterator
console.log(map.keys());
//values() used to get values by the form of mapiterator
console.log(map.values());

//delete() used to delete key value pair , input as key , returns boolean value
console.log(map.delete('salary'));
console.log(map);

//has() used to check particular key is present or not
//and it returns a boolean value 
console.log(map.has('id'));

//size is a property for map returns size of map like number
console.log(map.size);

//clear() used the clear complete map object
map.clear()
console.log(map);