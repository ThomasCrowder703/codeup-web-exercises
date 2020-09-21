"use strict"



function getLastCommit(param) {
    fetch("https://api.github.com/users/" + param + "/events/public", {headers: {'Authorization': 'token 6048dc904d8ae911b884437ba68a04f3df110f98'}})
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
//     fetch("https://api.github.com/users", {headers: {'Authorization': 'token 6048dc904d8ae911b884437ba68a04f3df110f98'}})
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


