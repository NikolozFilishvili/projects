// first we create hmm placeholder texts

const texts = [
    "you should join my squad because I am one of the oldest squad leaders in Goa",
    "I've had multiple students under my name and have a significant amount of experience in helping new Goa students",
    "some of the students under my squad have achieved many things and walk path of success, some of them now have become squad leaders themselves",
    "I will help you with any problems you have throughout your stay in my squad",
    "Lorem ipsum dolor sit amewt consectutr adipiscign elit sit amet volptatum aela ieacta est Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor  voluptatum repellendus suscipit commodi"
]
//iteration counter
let indx = 0

// second we assign variables 
const placeHolder = document.getElementById('plc')
const leftBtn = document.getElementById('btn1')
const rightBtn = document.getElementById('btn2')

// now to the actual functions

function textUpdater(){
    placeHolder.textContent = texts[indx]
}

// now we need to add event listeners to buttons to change texts
leftBtn.addEventListener('click', () => {
    if (indx > 0) {
        indx--;
        textUpdater()
    }
});
rightBtn.addEventListener('click', () => {
    if (indx < texts.length -1 ){
        indx++
        textUpdater()
    }
});

textUpdater()
