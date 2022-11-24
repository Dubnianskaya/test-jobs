type randomNumFn = (a: number, b: number) => number;

export const randomNumberInRange: randomNumFn = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}