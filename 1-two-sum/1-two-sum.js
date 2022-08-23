/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const answer = [];
  for(let i = 0; i< nums.length; i++)  {
      for(let j= 1; j< nums.length; j++){
          let sum = nums[i] + nums[j];
          
          if(sum === target){
              if(i === j){
                  continue;
              }else {
                  answer.push(i)
              answer.push(j)
              return answer;
              }
              
          }
      }
  }
};