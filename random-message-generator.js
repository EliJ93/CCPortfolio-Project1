
let randButton = document.getElementById("randomButton");
randButton.onclick = function () {
    document.getElementById("randomMessage").innerHTML = createRandomMessage();
}

const createRandomMessage = () => {
    let animalsArray = ['dog', 'cat', 'monkey', 'elephant', 'giraffe',
        'lion', 'tiger', 'gorilla', 'hippo', 'fish', 'alligator', 
        'crocodile', 'coyote', 'wolf', 'platypus', 'jelly fish', 
         'puma', 'jaguar', 'buffalo', 'chicken', 'turkey', 'bunny',
        'rabbit', 'camel'];
        let adjectiveArray = ['happy', 'sad', 'grumpy', 'serious',
        'okay', 'bored', 'playful', 'focused', 'timid', 'adamant',
        'jolly', 'bashful', 'lonely', 'brave', 'lax', 'relaxed',
        'calm', 'gentle', 'careful', 'naive', 'hasty', 'hardy',
        'quiet', 'mild', 'quirky', 'docile'];
        let createSentence;
        let randomNumber1 = Math.floor(Math.random() * 24);
        let randomNumber2 = Math.floor(Math.random() * 26);
        let randomNumber3 = Math.floor(Math.random() * 24);
        let randomNumber4 = Math.floor(Math.random() * 26);
        if(randomNumber1 === randomNumber3) {
            createSentence = `The ${animalsArray[randomNumber1]} is ${adjectiveArray[randomNumber2]}, while the other ${animalsArray[randomNumber3]} is ${adjectiveArray[randomNumber4]}.`;
        }
        else if(randomNumber2 === randomNumber4) {
            createSentence = `The ${animalsArray[randomNumber1]} is ${adjectiveArray[randomNumber2]}, while the ${animalsArray[randomNumber3]} is also ${adjectiveArray[randomNumber4]}.`;
        }
        else if(randomNumber1 === randomNumber3 && randomNumber2 === randomNumber4) {
            createSentence = `The ${animalsArray[randomNumber1]} is ${adjectiveArray[randomNumber2]}, while the other ${animalsArray[randomNumber3]} is also ${adjectiveArray[randomNumber4]}.`;
        }
        else {
            createSentence = `The ${animalsArray[randomNumber1]} is ${adjectiveArray[randomNumber2]}, while the ${animalsArray[randomNumber3]} is ${adjectiveArray[randomNumber4]}.`;
        }
        return createSentence;
}

//console.log(createRandomMessage());