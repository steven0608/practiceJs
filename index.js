//Count String, array of strings
function countChar(string) {
  var obj={};
  for (var i = 0; i < string.length; i++) {
    let char= string[i].toLowerCase()
    if(/[a-z0-9]/.test(char)){

      obj[char]=++obj[char] || 1
      // debugger;
    }
  }
  // debugger;
  return obj;
}




// let sample="Hhhellosd"
// let sample = ["Hihihihi","W","w","1"]
// console.log(countChar(sample))


//square of the first array

function same(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
}
    for (var i = 0; i < arr1.length; i++) {
      let correctIndex = arr2.indexOf(arr1[i] * arr1[i])
      if (correctIndex === -1) {
        return false;
      }
        arr2.splice(correctIndex,1)
    }
    return true;
  }


// console.log(same([1,2,3],[1,4,9]))

// count two arguments of numbers (Given 2 positive integers,find out if two numbers have the same Frequency of digits)
function sameFrequency(num1, num2){
  let strNum1 = num1.toString(); //convert integers to string
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false; //check the length of the string, if the length is not the same, return false

  let countNum1 = {}; //declare the variable and assign it to be a empty object
  let countNum2 = {};

//iterate thru the first string, and count the Frequency and store the number into the empty object
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }


  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  //compare the two Frequency objects that we have: if the value(Frequency) of the key in both objects aren't match, then return false

  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}



function sameFrequency(num1, num2){
  let strnum1 = num1.toString()
  let strnum2 = num2.toString()

  if(strnum1.length !== strnum2.length){
      return false
  }
  let obj1 = {}
  let obj2 = {}

  for(let i = 0; i < strnum1.length; i++){
      obj1[strnum1[i]] = (obj1[strnum1[i]] || 0) +1
  }
  for(let j=0; j < strnum2.length; j++){
      obj2[strnum2[j]] = (obj2[strnum2[j]] || 0) +1
  }

  for(let key in obj1){
      if(obj1[key] !== obj2[key]){
          return false
      }
  }
  return true
}

// check if there are duplicates in arguments
function areThereDuplicates() {
  //first, initialize a variable with a empty object
  let collection = {}

  //arguments is a collection (not array), but we can iterate
  for(let val in arguments){
    //count the Frequency of value in the arguments and store those value in the empty object
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  //check each key in the object, it the value key parir has value of more than 1, mean there are duplicates (return true)
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  //otherwise, return false
  return false;
}


function areThereDuplicates(...args) {
  // Two pointers
  //sort the array
  args.sort()
  // debugger;
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
      // if there are duplicates, return true
        return true
    }
    start++
    next++
  }
  //otherwise, return false
  return false
}



function areThereDuplicates() {
    // debugger;
    //new Set()takes a collection (arguments), size will only count unique
    //so if size === length, which mean no duplicates, return false, otherwise return false
  return new Set(arguments).size !== arguments.length;

}



//Anagrams
function validAnagram(first, second) {
  //check if the length of two strings match
  if (first.length !== second.length) {
    return false;
  }

  // initialize a constant with a empty object
  const lookup = {};

//iterate the first array and count the Frequency of each character
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    //sotre the Frequency of value into the object
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  // console.log(lookup)

  //check our second string with the lookup object
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}

// console.log(validAnagram("anagrams", "nagarasm"))


//Sum zero (return the first pair of value that has sum of 0)
function sumZero(arr){
  //iterate the array
    for(let i = 0; i < arr.length; i++){
      //iterate the array with other rest of the element in the array
        for(let j = i+1; j < arr.length; j++){
          //if there is a match of sum 0 , return the first pair of value that has sum of 0
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

//refactor (only when it's a sorted array)
//this will work only when it's a sorted array
function sumZero(arr) {
  //start from the left
  let left = 0
  // start from the right (last element's index)
  let right = arr.length - 1

//start the while loop
  while (left < right) {
    //sum the numbers
    let sum = arr[left] + arr[right]
    // if the sum === 0 , return the value pair
    if (sum === 0) {
      return [arr[left],arr[right]]
      //if the sum is greater than 0 , sum with a smaller number
    }else if (sum > 0) {
      right --
    }else {
      // otherwise, sum with a bigger number
      left++
    }
  }
}

// console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))




document.getElementsByClassName('counter')





function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // sort number array
    A.sort(function(a, b){return a-b})
    //if the biggest number in the array is negative or equal to 0 or the array don't have 1, then return 1
      if(A[A.length-1]<=0 || !A.includes(1)){
          return 1
        }else{
          // otherwise, iterate the array and find the gap
            for (let i = 0; i < A.length; i++) {
              if (A[i]>=1 && A[i]+2<=A[i+1] || i === A.length-1) {
                return A[i]+1
                }
              }
            }
          }


//find Array max sum given two arguments (array of numbers, num of element to sum)

function arraySum(arr,num) {
  let maxSum = 0
  let temSum = 0
  //if the array don't have enough of elements to sum, return null
  if (arr.length < num) {
      return null
  }

//start from the left, sum the first num of elements in the array
  for (let i = 0; i < num; i++) {
    temSum+=arr[i]
  }
  //then iterate from the index num thru the whole array
  for (let i = num; i < arr.length; i++) {
    temSum = temSum + arr[i] - arr[i - num]
    //maxsum will be store if bigger number arrise
    maxSum = Math.max(temSum,maxSum)
    // console.log(temSum,maxSum)
  }
  // console.log(maxSum)
  return maxSum
}


//
//
//   let array=[1,8,9,1,2,3,4,5,6,9,1,2,2,3,4,5,100,1,2,3,4,5,6,900,9,99,9,9,123123,10238203,131,0]
//   let number= 4
// console.log(arraySum(array,number))




//search Array of sorted numbers


function search(array,num) {
    let min = 0
    let max = array.length - 1
    // debugger;

    while (min <= max) {
      let middle = Math.floor((max + min)/2)

      // start from the middle number
      if (array[middle] < num) {
        // if the middle element is small than our seach num, increase in the min
          min = middle + 1
      }else if (array[middle] > num) {
        // if the middle element is bigger than our search num, decrease in the max
          max = middle - 1
      }else {
        // debugger;
        //if the num match, that our answer, return the index of the element, which is middle
        return middle
      }
    }
    return -1
}

//
// let array=[1,2,3,4,5,6,7,8,9,10,1000,10101010,9999999999999]
// let num = 1000
//
// console.log(search(array,num))

//maxsubarray solution
function maxSubarraySum(arr, num){
  //return null if array length is less than the expected lenght (num)
    if (arr.length < num) return null;

    let total = 0;
    //sum the first num of elements
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    //set current total
    let currentTotal = total;
    //start iterate from the expected num index
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    //return max sum
    return total;
}


//minSubArrayLen Solution
//nums => array of positive integers
//sum => expected sum
//return the minlen of that sum based on the given array
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
		// move the window to right
    if(total < sum && end < nums.length){
      console.log("start",start)
      console.log("end",end)
      total += nums[end];
      console.log("total",total)
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
      console.log("start",start)
      console.log("end",end)
			total -= nums[start];
      console.log("total",total)
      console.log("minLen",minLen)
			start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      console.log("start",start)
      console.log("end",end)
      console.log("total",total)
      console.log("minLen",minLen)


      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// minSubArrayLen([2,3,1,2,4,3],7)  output = 2
//get the closet to target and calculate the short length to reach the target by removing from the left. In the end, the minlen is our result.



// given a string, and return the length of the longest substring with all distinct characters

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
      console.log("repeated word",char)
      console.log("seen[char]",seen[char])
      console.log("start",start)

    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
    console.log("longest string",longest)
    console.log("seen",seen)
  }
  return longest;
}



// search string inside of a long string (Navive solution n^2)
function searchStr(long,short){
    let count = 0
    for(let i = 0; i<long.length; i++){
        for(let j= 0; j<short.length;j++){
            if(short[j] !== long[i+j]){
                break;
            }
            if(j === short.length -1){
                console.log("Found one")
                count++
            }}}
    return count
}
