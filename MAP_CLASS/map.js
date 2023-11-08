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

//keys() used to get key names by the form of mapiterator
console.log(map.keys());