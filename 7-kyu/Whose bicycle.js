function whoseBicycle(diary1, diary2, diary3) {
    const generalAssessment = (diary) => {
        let sum = 0;
        for (evaluation in diary) {
            sum += diary[evaluation];
        }
        return sum;
    };

    const d1 = generalAssessment(diary1);
    const d2 = generalAssessment(diary2);
    const d3 = generalAssessment(diary3);

    if (d1 > d2 && d1 > d3) return "I need to buy a bicycle for my first son.";

    if (d2 > d3 && d2 > d1) return "I need to buy a bicycle for my second son.";

    if (d3 > d1 && d3 > d2) return "I need to buy a bicycle for my third son.";

    if (d1 === d2 && d1 === d3)
        return "I need to buy a bicycle for my third son.";
    if (d1 === d2) return "I need to buy a bicycle for my second son.";

    if (d2 === d3) return "I need to buy a bicycle for my third son.";
    if (d1 === d3) return "I need to buy a bicycle for my third son.";

    return 0;
}

const ageTable = {
    firstSonAge: 14,
    secondSonAge: 9,
    thirdSonAge: 8,
};

console.log(
    whoseBicycle(
        {
            algebra: 6,
            history: 7,
            physics: 8,
            geography: 9,
            chemistry: 10,
        },
        {
            algebra: 8,
            history: 7,
            physics: 8,
            geography: 9,
            chemistry: 10,
        },
        {
            algebra: 6,
            history: 5,
            physics: 5,
            geography: 9,
            chemistry: 10,
        }
    )
); // 'I need to buy a bicycle for my second son.'

console.log(
    whoseBicycle(
        {
            algebra: 6,
            history: 7,
            physics: 8,
            geography: 9,
            chemistry: 10,
        },
        {
            algebra: 6,
            history: 7,
            physics: 8,
            geography: 9,
            chemistry: 10,
        },
        {
            algebra: 6,
            history: 7,
            physics: 8,
            geography: 9,
            chemistry: 10,
        }
    )
); //'I need to buy a bicycle for my third son.'

console.log(
    whoseBicycle(
        {
            algebra: 6,
            history: 7,
            physics: 8,
            geography: 9,
            chemistry: 5,
        },
        {
            algebra: 6,
            history: 7,
            physics: 8,
            geography: 9,
            chemistry: 10,
        },
        {
            algebra: 6,
            history: 7,
            physics: 8,
            geography: 9,
            chemistry: 10,
        }
    )
); //'I need to buy a bicycle for my third son.'
console.log(
    whoseBicycle(
        {
            algebra: 3,
            history: 7,
            physics: 8,
            geography: 4,
            chemistry: 10,
        },
        {
            algebra: 6,
            history: 7,
            physics: 8,
            geography: 9,
            chemistry: 4,
        },
        {
            algebra: 9,
            history: 7,
            physics: 9,
            geography: 9,
            chemistry: 10,
        }
    )
); //'I need to buy a bicycle for my third son.'
