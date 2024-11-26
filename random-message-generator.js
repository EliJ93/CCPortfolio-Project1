
let randButton = document.getElementById("randomButton");
randButton.onclick = function () {
    document.getElementById("randomMessage").innerHTML = createRandomMessage();
}

const createRandomMessage = () => {
    let animalsArray = ['dog', 'cat', 'monkey', 'elephant', 'giraffe',
        'lion', 'tiger', 'gorilla', 'hippo', 'fish', 'alligator', 
        'crocodile', 'coyote', 'wolf'];
        let adjectiveArray = ['happy', 'sad', 'grumpy', 'serious',
        'okay', 'bored', 'playful', 'focused', 'timid', 'adamant',
        'jolly'];

        let randomNumber1 = Math.floor(Math.random() * 14);
        let randomNumber2 = Math.floor(Math.random() * 11);
        let randomNumber3 = Math.floor(Math.random() * 14);
        let randomNumber4 = Math.floor(Math.random() * 11);
        let createSentence = `The ${animalsArray[randomNumber1]} is ${adjectiveArray[randomNumber2]}, while the ${animalsArray[randomNumber3]} is ${adjectiveArray[randomNumber4]}.`;
        return createSentence;
}

//console.log(createRandomMessage());