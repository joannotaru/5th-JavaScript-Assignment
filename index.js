
// Question 1

const myObj = {
    fname: "Joe",
    lname: "Shmoe",
    age: 45,
    complexion: "dark",
    location: "Lagos",
    business: "trading"
};

for (const key in myObj) {
    console.log(`${key}: ${myObj[key]}`);
}

// Question 2

const towns = {
    nigeria: "Abuja",
    lagos: "Ikeja",
    imo: "Owerri"
};

let townsArr = Object.entries(towns);
console.log(townsArr);
