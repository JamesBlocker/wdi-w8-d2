// function findById(arr, id) {
//     for (var i = 0; i < arr.length; i++) {
//         var obj = arr[i];
//         if (obj.id === id) {
//             return obj
//         }
//     }
//     return null
// }

// function findById(arr, id) {
//     var result = arr.filter(obj => obj.id === id)
//     return result[0]
// }

function findById(arr, id) {
    return arr.find((el) => el.id === id) || null
}

var users = [
    {id: 123, name: "Dawson's Creek"},
    {id: 456, name: "Jordan Peele"},
    {id: 789, name: "Wonn Tonn Soop"}
]

console.log(findById(users, 123))
console.log(findById(users, 456))
console.log(findById(users, 680))