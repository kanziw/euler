/**
 * 10보다 작은 자연수 중에서 3 또는 5의 배수는 3, 5, 6, 9 이고, 이것을 모두 더하면 23입니다.
 * 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면 얼마일까요?
 */

const _ = require('lodash')
const isMultiple3or5 = num => num % 3 === 0 || num % 5 === 0

console.log(
  'The answer is :',
  _.range(1000).reduce((sum, num) => isMultiple3or5(num) ? sum += num : sum, 0)
)
