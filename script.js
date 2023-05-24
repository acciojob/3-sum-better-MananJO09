function threeSum(arr, target) {
// write your code here
	Arrays.sort(arr);
	let Closestsum=0;
	
	for(let i=0; i<arr.length; i++){
		
		let left=i+1;
		let right=arr.length-1;
		let Closestsum=arr[i]+arr[left]+arr[right];
		while(left<right){
			if(Closestsum==target){
				return Closestsum;
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
