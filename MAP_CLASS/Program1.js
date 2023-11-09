let map=new Map([[
    1900,[{id:101,name:"a",job:"aaa"},
            {id:102,name:"b",job:"bbb"},
                {id:103,name:"c",job:"ccc"}]],[
    2000,[{id:201,name:"x",job:"xoxo"},
            {id:202,name:"y",job:"yoyo"},
                {id:203,name:"z",job:"zozo"}]],[
    3000,[{id:301,name:"m",job:"mumu"},
            {id:302,name:"n",job:"nunu"},
                {id:303,name:"o",job:"ouou"}]]
])

let n="b"
console.log(map);
console.log(map.get(1900));

let res=map.get(1900).find((obj)=>{
   if(n==obj.name){
    return obj
   }
})
console.log(res);


let job="zozo"

map.forEach((data)=>{
    data.find((obj)=>{
        if(obj.job===job){
            console.log(obj);
        }
    })
})

