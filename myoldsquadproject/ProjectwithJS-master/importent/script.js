let first_item = 0;
let second_item = 0;
let third_item = 0;
let fourth_item = 0;
let fifth_item = 0;
let sixth_item = 0;
let votes = 0;
let count = 0;
let fuckyou = document.querySelector("header button");
let divarr = document.querySelector(".second");
// sarchevi
let it = document.querySelector("i");
// all childs of grid
let g1 = document.querySelector(".grid div img:nth-child(1)");
let g2 = document.querySelector(".f");
let g3 = document.querySelector(".ff");
let g4 = document.querySelector(".fff");
let g5 = document.querySelector(".ffff");
let g6= document.querySelector(".fffff");
// what needs to change every time basically
let h1 = document.querySelector(".second h1");
let img = document.querySelector(".second img");
let btn = document.querySelector(".second button");
// buttons
let fw = document.querySelector(".b2");
let bw = document.querySelector(".b1");

// I use these to choose what needs to change and in what order <3
let first = ["Xiaomi Black Shark Lucifer T4", "piktures 2/1.png"];
let second = ["JBL Tune T510 BT Wireless On-Ear Headphones Black", "piktures 2/3.png"];
let third = ["Xiaomi Black Shark Lucifer T10 Black", "piktures 2/6.png"];
let fourth = ["Logitech BT Keyboard K380 Grey", "piktures 2/8.png"];
let fifth = ["Razer Mouse Pad Sphex V3 L Black", "piktures 2/9.png"];
let sixth = ["Logitech c505 HD webcam Black", "piktures 2/12.png"];

// list of all voters for then to later choose
var voters = [];

// event listeners
g1.addEventListener("click", func1);
g2.addEventListener("click", func2);
g3.addEventListener("click", func3);
g4.addEventListener("click", func4);
g5.addEventListener("click", func5);
g6.addEventListener("click", func6);
let myarr = [func1, func2, func3, func4, func5, func6];

// button event listeners
fw.addEventListener("click", forward);
bw.addEventListener("click", backwards);

// Function to update footer based on votes
function checkVotes() {
    let foot = document.querySelector("footer");
    if (votes >= 5) {
        foot.innerHTML = `<p> first = ${first_item}, second = ${second_item}, third = ${third_item}, fourth = ${fourth_item}, fifth = ${fifth_item}, sixth = ${sixth_item}`;
    }
}


// ... your existing code ...

// Inside the if statement when a winner is selected
function selectWinner(){
    if (votes >= 15) {
        
        let foot = document.querySelector("footer");
        let winner = voters[Math.trunc(Math.random() * 15)];
        console.log(winner, "is the Winner");
        // Display the winner in the winner element
        foot.innerHTML = `<p><span> ${winner}</span> is the Winner<span>!</span> </p>`;
    
        // Add the rainbow-text class to start the animation
        
        
}}

function func1() {
    it.style.color = "lightGreen";
    divarr.innerHTML = `<h1> ${first[0]} </h1>
                        <img src="${first[1]}">
                        <button> ხმის მიცემა </button>`;
    let btn = document.querySelector(".second button");
    btn.addEventListener("click", function () {
        let name2 = prompt("enter your name and last name:");
        console.log(name2, "voted first item");
        voters.push(name2);
        first_item++;
        votes++;
        btn.style.display = "none";
        checkVotes();
        selectWinner();
    });
}

function func2() {
    divarr.innerHTML = `<h1> ${second[0]} </h1>
                       <img src="${second[1]}">
                       <button> ხმის მიცემა </button>`;
    let h1 = document.querySelector(".second h1");
    h1.style.color = "blue";
    h1.style.fontSize = "25px";
    let btn = document.querySelector(".second button");
    btn.style.border = "2px blue ridge";
    btn.addEventListener("mouseover", function () {
        btn.style.backgroundColor = "blue";
    });
    btn.addEventListener("mouseout", function () {
        btn.style.backgroundColor = ""; // Set it to an empty string to revert to default
    });
    btn.addEventListener("click", function () {
        let name1 = prompt("enter your name and last name:");
        console.log(name1, "voted second item");
        voters.push(name1);
        second_item++;
        votes++;
        btn.style.display = "none";
        checkVotes();
        selectWinner();
    });
    it.style.color = "blue";
}

function func3() {
    it.style.color = "lightGreen";
    divarr.innerHTML = `<h1> ${third[0]} </h1>
                        <img src="${third[1]}">
                        <button> ხმის მიცემა </button>`;
    let btn = document.querySelector(".second button");
    btn.addEventListener("click", function () {
        let name1 = prompt("enter your name and last name:");
        console.log(name1, "voted third item");
        voters.push(name1);
        third_item++;
        votes++;
        btn.style.display = "none";
        checkVotes();
        selectWinner();
    });
}

function func4() {
    divarr.innerHTML = `<h1> ${fourth[0]} </h1>
                        <img src="${fourth[1]}">
                        <button> ხმის მიცემა </button>`;
    let h1 = document.querySelector(".second h1");
    h1.style.color = "#E4CD41";
    let btn = document.querySelector(".second button");
    btn.style.border = "2px #E4CD41 ridge";
    btn.addEventListener("mouseover", function () {
        btn.style.backgroundColor = "#E4CD41";
    });
    btn.addEventListener("mouseout", function () {
        btn.style.backgroundColor = ""; // Set it to an empty string to revert to default
    });
    btn.addEventListener("click", function () {
        let name1 = prompt("enter your name and last name:");
        console.log(name1, "voted fourth item");
        voters.push(name1);
        fourth_item++;
        votes++;
        btn.style.display = "none";
        checkVotes();
        selectWinner();
    });
    it.style.color = "#E4CD41";
}

function func5() {
    it.style.color = "lightGreen";
    divarr.innerHTML = `<h1> ${fifth[0]} </h1>
    <img src="${fifth[1]}">
    <button> ხმის მიცემა </button>`;
    let btn = document.querySelector(".second button");
    btn.addEventListener("click", function () {
        let name1 = prompt("enter your name and last name:");
        console.log(name1, "voted fifth item");
        voters.push(name1);
        fifth_item++;
        votes++;
        btn.style.display = "none";
        checkVotes();
        selectWinner();
    });
}

function func6() {
    it.style.color = "lightGreen";
    divarr.innerHTML = `<h1> ${sixth[0]} </h1>
    <img src="${sixth[1]}">
    <button> ხმის მიცემა </button>`;
    let btn = document.querySelector(".second button");
    btn.addEventListener("click", function () {
        let name1 = prompt("enter your name and last name:");
        console.log(name1, "voted sixth item");
        voters.push(name1);
        sixth_item++;
        votes++;
        btn.style.display = "none";
        checkVotes();
        selectWinner();
    });
}

let num = -1;

function forward() {
    num++; // Increment num before calling the function
    if (num >= myarr.length) {
        num = 0; // Reset to the first function
    }
    myarr[num](); // Call the current function
}

function backwards() {
    num--; // Decrement num before calling the function
    if (num < 0) {
        num = myarr.length - 1; // Wrap around to the last function
    }
    myarr[num](); // Call the current function
}

