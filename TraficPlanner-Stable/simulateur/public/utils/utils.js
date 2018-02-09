function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function coefficientDirecteur(ax, ay, bx, by) {
    if (bx === ax || by === ay) {
        return 0;
    } else {
        return (by - ay) / (bx - ax);
    }
}

function ordonnneeOrigine(ax, ay, coefDirecteur) {
    return ay - (ax * coefDirecteur);
}

function diff(num1, num2) {
    if (num1 > num2) {
        return (num1 - num2);
    } else {
        return (num2 - num1);
    }
}
function dist(x1, y1, x2, y2) {
    var deltaX = diff(x1, x2);
    var deltaY = diff(y1, y2);
    var dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    return (dist);
}
function normeSoustraction(a, b) {
    if (b - a > 0) {
        return b - a;
    } else {
        return a - b;
    }
}

function getRandomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {getRandomMinMax,diff,ordonnneeOrigine,coefficientDirecteur,getRandomInt,dist,normeSoustraction};