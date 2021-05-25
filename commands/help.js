let fs=require("fs");
let path=require("path");
function helpFn(){
    console.log(`List of all the commands:
          got tree-->to get the folders in the form of tree
          got oganize-->to get the files in different types of folders
          got help-->to see command
    `);
}
module.exports={
    helpKey:helpFn
}