


function mSort (array) {
    if (array.length === 1) {
    return array                            
 }
 const middle = Math.floor(array.length / 2) 
 const left = array.slice(0, middle)         
 const right = array.slice(middle)           
 document.write(middle);
 return merge(
    mSort(left),
    mSort(right)
 )
 }
 function merge (left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
       if (left[leftIndex] < right[rightIndex]) {
       result.push(left[leftIndex])
       leftIndex++
       document.write("</br>");        
       } else {
       result.push(right[rightIndex])
       rightIndex++      
    }
 }
 return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
 }
 const list = [34,7,23,32,5,62]
 document.write(mSort(list));