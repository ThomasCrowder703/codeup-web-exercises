"use strict"



function getLastCommit(param) {
    fetch("https://api.github.com/users/" + param + "/events/public", {headers: {'Authorization': 'token 6048dc904d8ae911b884437ba68a04f3df110f98'}})
        .then(response => {
            response.json().then(users => {
                for (var i =0; i <users.length; i++) {
                    if (users[i].type === "PushEvent") {
                        console.log("Latest commit : " + users[i].created_at)
                        break;
                    }
                }
                })
            });

}



getLastCommit("ThomasCrowder703")
