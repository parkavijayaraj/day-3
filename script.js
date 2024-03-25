
//task 1:
let obj1 = {name:"person1",age:5};
let obj2 = {age:5,name:"person1"};
let str1 = JSON.stringify(obj1,Object.keys(obj1).sort()) 
console.log(str1);
let str2 = JSON.stringify(obj2,Object.keys(obj2).sort()) 
console.log(str2);
if(str1===str2){
    console.log("The JSON objects are equal");
}
else{
    console.log("The JSON objects are not equal");
}

//task 2 and 3
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function() {

var data = request.response;
var result = JSON.parse(data)
for(var i=0;i<result.length;i++){
    
    console.log(result[i].flags.png)
}
var data1 = request.response;
var result1 = JSON.parse(data1)
for(var i=0;i<result1.length;i++){
    
    console.log("country name:"+""+result1[i].name.common,"region:"+" "+result1[i].region,"subregion:"+" "+result1[i].subregion)
}
}
