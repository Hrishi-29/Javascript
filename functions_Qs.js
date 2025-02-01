function larg(arr,num){
    for(let i=0;i<=arr.length;i++){
    if(arr[i]>num){
    return arr[i];
    }
    else{
    return num;
    }
    }
};
larg([2,5,6,3,8,4],3)