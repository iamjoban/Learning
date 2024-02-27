function printDuplicate(str) {
    for(let i=0;i< str.length;i++){
        let subStr = str.substring(i+1);
        if(subStr.indexOf(str[i]) >-1){
            console.log(str[i]);
        }
    }
}

let str = "abcab";
printDuplicate(str);
