
export default store => next => action => {
    console.log('Logger MiddleWare: ', action);
    return next(action); 
}

// export default function(store) {
//     return function(next){
//         return function(action){
//             //code goes here 
//         }
//     }
// }
