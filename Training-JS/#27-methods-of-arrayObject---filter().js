function countGrade(scores) {
    return {
        S: scores.filter((el) => (el === 100 ? true : false)).length,
        A: scores.filter((el) => (el < 100 && el >= 90 ? true : false)).length,
        B: scores.filter((el) => (el < 90 && el >= 80 ? true : false)).length,
        C: scores.filter((el) => (el < 80 && el >= 60 ? true : false)).length,
        D: scores.filter((el) => (el < 60 && el >= 0 ? true : false)).length,
        X: scores.filter((el) => (el === -1 ? true : false)).length,
    };
}

console.log(countGrade([50, 60, 70, 80, 90, 100]));
