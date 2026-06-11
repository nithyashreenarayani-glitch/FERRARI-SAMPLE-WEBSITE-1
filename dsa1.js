// your code goes here
//binary search
arr=[2,4,6,8,10]
target=10;
start=0;
end= arr.length-1

while(start<=end){
  mid=Math.floor(((start+end)/2))
  
  if(arr[mid]===target){
    console.log("Number found at index:"+mid)
    break;
  }
  
  if(arr[mid]<target){
    start=mid+1
  }
  
  else if(arr[mid]>target){
    end=mid-1
  }
}