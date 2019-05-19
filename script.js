function min(arr) {
  arr.sort(function(a,b){return a - b})
  return arr[0]
  }
  
function max(arr) {
  arr.sort(function(a,b){return b - a})
  return arr[0]
  }

function mean(arr) {
    var total = 0 
    for (var i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total / arr.length
    }

function odds(arr) {

}

function evens(arr) {

}

function numberProcessing(arr) {
  return 'Min: ' + min(arr) + ', Max: ' + max(arr) + ', Mean: ' + mean(arr) + ', Odds: ' + odds(arr) + ', Evens: ' + evens(arr)
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]))
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"