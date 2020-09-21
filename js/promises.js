"use strict"



function getLastCommit(param) {
    fetch("https://api.github.com/users/" + param + "/events/public", {headers: {'Authorization': promisesToken}})
        .then(response => {
            response.json().then(users => {
                for (var i =0; i <users.length; i++) {
                    if (users[i].type === "PushEvent") {
                        console.log("Latest commit for " + param + " : " + users[i].created_at)
                        break;
                    }
                }
                })
            });

}


// let loginName = []
//     fetch("https://api.github.com/users", {headers: {'Authorization': }})
//         .then(response => {
//             response.json().then(users => {
//                 for( let i = 0; i < users.length; i++){
//                     loginName.push(users[i].login)
//                 }
//
//             })
//         })
// console.log(loginName)

getLastCommit("ThomasCrowder703")


