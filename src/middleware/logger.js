
export default store => next => action => {
    return next(action); 
}

// export default function(store) {
//     return function(next){
//         return function(action){
//             //code goes here 
//         }
//     }
// }
