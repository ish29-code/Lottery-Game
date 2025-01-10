function genTicket(n){
     let arr = new Array(n);
     for(let i=0;i<n;i++){
          arr[i] = Math.floor(Math.random()*10);
     }
     return arr;
}
function sum(arr){
     let s = 0;
     for(let i=0;i<arr.length;i++){
          s += arr[i];
     }
     return s;
     //return arr.reduce((sum,curr)=>sum+curr,0);
}
export {genTicket, sum}