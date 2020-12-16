

 function remove_duplicate(arr){
     var data=[];
     val={};
     for(var x=0;x<arr.length;x++){
         val[arr[x]]=0;
     }
     for(x in val){
         data.push(x);
     }
     return data;
 }
let arr1=['a','a','A','b','B','c','C','d','d'];
let arr2=arr1.map(arr1=>arr1.toLowerCase());
let res=remove_duplicate(arr2);
document.write("Input: "+arr1+"<br>")
document.write("Output:"+res);
