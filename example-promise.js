// function getTempCallback(location, callback) {
//   callback(undefined, 78)
//   callback('City not found')
// }
//
// getTempCallback('Budapest', function(err, temp) {
//   if (err) {
//     console.log('error', err)
//   } else {
//     console.log('success', temp)
//   }
// })
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function () {
//       resolve(79)
//       reject('City not found')
//     }, 1000)
//
//   })
// }
//
// getTempPromise('Budapest').then(function(temp) {
//   console.log('promise success', temp)
// }, function(err) {
//   console.log('promise error', err)
// })

// Challenge Area
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject('a or b is not a number!')
    } else {
      resolve(a + b)
    }
  })
}

addPromise(1,2).then(function(result) {
  console.log('1 + 2 =', result)
}, function(err) {
  console.log('error', err)
})

addPromise(1,'2').then(function(result) {
  console.log('1 + "2" =', result)
}, function(err) {
  console.log('error', err)
})
