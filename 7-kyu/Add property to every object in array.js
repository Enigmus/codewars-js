var questions = [
    {
        question: "What's the currency of the USA?",
        choices: ["US dollar", "Ruble", "Horses", "Gold"],
        corAnswer: 0,
    },
    {
        question: "Where was the American Declaration of Independence signed?",
        choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
        corAnswer: 0,
    },
];

for (let question of questions) {
    question.usersAnswer = null;
}

console.log(questions);

/* 
    15 минут сидел, втакал почему не работеат, оказалось неправильное имя свойства было, которое я добавлял в объект userAnswer != usersAnswer
*/
