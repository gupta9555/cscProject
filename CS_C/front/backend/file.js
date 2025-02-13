const fs=require("fs");
const data=fs.readFileSync("./data.txt", "utf-8");
console.log(data);
fs.writeFileSync("data.txt","hello","utf-8");
 fs.writeFileSync("data.txt","abes","utf-8");
//  fs.renameSync("data2.txt","data3.txt");
 if(data.match("a")){
    console.log("2")
 };