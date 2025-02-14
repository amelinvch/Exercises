/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
  const checkArr = (array, k) => {
    for (let ind = 0; ind < array.length; ind++) {
      const element = array[ind];
      if(element < k) { return false; }
    }
    return true;
  };

  var minOperations = function(nums, k) {
    nums.sort((a, b) => a - b);
    let count = 0;
    while(!checkArr(nums, k)){
      let min1 = nums.shift();
      let min2 = nums.shift();

      nums.push(min1*2 + min2);
      nums.sort((a, b) => a - b);
      
      count++;
    }
    return count;
  };
*/

function heapifyUp(heap, index) {
  while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (heap[parent] <= heap[index]) break;
      [heap[parent], heap[index]] = [heap[index], heap[parent]];
      index = parent;
  }
}

function heapifyDown(heap, index) {
  let length = heap.length;
  while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && heap[left] < heap[smallest]) smallest = left;
      if (right < length && heap[right] < heap[smallest]) smallest = right;

      if (smallest === index) break;
      [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
      index = smallest;
  }
}

function heapPush(heap, val) {
  heap.push(val);
  heapifyUp(heap, heap.length - 1);
}

function heapPop(heap) {
  if (heap.length === 1) return heap.pop();
  let min = heap[0];
  heap[0] = heap.pop();
  heapifyDown(heap, 0);
  return min;
}

var minOperations = function(nums, k) {
  let count = 0;
  
  let heap = [];
  for (let num of nums) {
      heapPush(heap, num);
  }

  while (heap[0] < k) {
      let min1 = heapPop(heap);
      let min2 = heapPop(heap);
      heapPush(heap, min1 * 2 + min2);
      count++;
  }

  return count;
};

console.log('1) 2 answer: ', minOperations([2,11,10,1,3], 10));
console.log('2) 4 answer: ', minOperations([1,1,2,4,9], 20));
console.log('3) 0 answer: ', minOperations([1,1,2,4,9], 1));