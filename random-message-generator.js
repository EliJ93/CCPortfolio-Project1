
let randButton = document.getElementById("randomButton");
randButton.onclick = function () {
    document.getElementById("randomMessage").innerHTML = createRandomMessage();
}

const createRandomMessage = () => {
    let animalsArray = ['dog', 'cat', 'monkey', 'elephant', 'giraffe',
        'lion', 'tiger', 'gorilla', 'hippo', 'fish', 'alligator', 
        'crocodile', 'coyote', 'wolf', 'platypus', 'jelly fish', 
         'puma', 'jaguar', 'buffalo', 'chicken', 'turkey'];
        let adjectiveArray = ['happy', 'sad', 'grumpy', 'serious',
        'okay', 'bored', 'playful', 'focused', 'timid', 'adamant',
        'jolly', 'bashful', 'lonely', 'brave', 'lax', 'relaxed',
        'calm', 'gentle', 'careful', 'naive', 'hasty', 'hardy',
        'quiet', 'mild', 'quirky', 'docile'];

        let randomNumber1 = Math.floor(Math.random() * 21);
        let randomNumber2 = Math.floor(Math.random() * 26);
        let randomNumber3 = Math.floor(Math.random() * 21);
        let randomNumber4 = Math.floor(Math.random() * 26);
        let createSentence = `The ${animalsArray[randomNumber1]} is ${adjectiveArray[randomNumber2]}, while the ${animalsArray[randomNumber3]} is ${adjectiveArray[randomNumber4]}.`;
        return createSentence;
}

//console.log(createRandomMessage());