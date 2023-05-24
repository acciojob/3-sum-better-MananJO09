function threeSum(arr, target) {
// write your code here
  Arrays.sort(arr);
	let Closestsum=0;
	let res=0;
	for(let i=0; i<arr.length; i++){
		let left=i+1;
		let right=arr.length-1;
		while(left<right){
			Closestsum=arr[i]+arr[left]+arr[right];
		}
	}
	if(Closestsum==target){
		res=Closestsum
		return res;
	}if(Closestsum>target){
		right++;
	}
	if(Closestsum<target){
		left++;
	}

}

module.exports = threeSum;
