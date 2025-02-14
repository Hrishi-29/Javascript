//return array elements larger than a num
function larg(arr,num){
    for(let i=0;i<arr.length;i++){
    if(arr[i]>num){
    console.log(arr[i]);
    }
    }
}
larg([2,5,6,3,8,4],3);
