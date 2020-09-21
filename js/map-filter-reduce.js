const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let manyLanguages = [];
const languagesLearned = users.filter(x => {return x.languages.length >= 3})
manyLanguages.push(languagesLearned)

// console.log(languagesLearned);
console.log("These people know 3 or more languages: " , manyLanguages[0]);

let everyoneEmail = [];

const coderMail = users.map(x => {return x.email})
everyoneEmail.push(coderMail)

console.log(everyoneEmail);

const totalExperience = users.reduce((accumulator, year)=> {
    return accumulator + year.yearsOfExperience

}, 0)

console.log(totalExperience)



const longestEmail = users .map((user)=> user.email ) .reduce((a,b)=> a.length > b.length ? a : b );
console.log(longestEmail);

console.log(" ")

const longestEmail2 = users.reduce((longest, user)=>{
    if(user.email.length > longest.length){
        return user.email
    }else{
        return longest;
    }
},"") //Douglas' Method

console.log("Douglas' Method for solving: "+ longestEmail2);


let everyoneNamesTemp = [];

const combineNames = users.map(x => {return x.name})
everyoneNamesTemp.push(combineNames);
let everyoneNames = everyoneNamesTemp.join("");
console.log(everyoneNamesTemp);
console.log(everyoneNames);

//Bonus Exercise

const allLanguages = users.reduce((languages, user)=> {
    user.languages.forEach((language)=>{
        if(!languages.includes(language)){
            languages.push(language);
        }
    });
    return languages
}, [])

console.log(allLanguages);