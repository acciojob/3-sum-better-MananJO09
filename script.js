function threeSum(arr, target) {
// write your code here
  Arrays.sort(arr);
	let Closestsum=0;
	
	for(let i=0; i<arr.length; i++){
		
		let left=i+1;
		let right=arr.length-1;
		let res=arr[i]+arr[left]+arr[right];
		while(left<right){
			if(Closestsum==target){
		res=Closestsum
		return res;
			}if(Closestsum>target){
				right++;
			}
			if(Closestsum<target){
				left++;
			}
			left++;
			right++;
		}
	}
	

}

module.exports = threeSum;
