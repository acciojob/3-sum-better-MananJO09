function threeSum(arr, target) {
	arr.sort((a, b) => a - b);
    let res = arr[0] + arr[1] + arr[2]; 
	for (let i = 0; i < arr.length - 2; i++) {
		let left = i + 1;
		let right = arr.length - 1;
		while (left < right) {
			let closestSum = arr[i] + arr[left] + arr[right];
			if (Math.abs(closestSum - target) < Math.abs(res - target)) {
				res = closestSum;
			}  
			if (closestSum < target) {
				left++;
			} else if (closestSum > target) {
				right--;
			} else {
				return res;
			}
		}
		}
    return res;
    }
module.exports = threeSum;


