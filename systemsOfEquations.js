class Matrix {
    constructor(m, n, rank, det) {
        this.m = m;
        this.n = n;
        this.rank = rank;
        this.det = det;
    }
}

function whatSSystemOfEquations(A, Aa) {
    var result = "System of equations is ...";
    var r = A.rank, r1 = Aa.rank;
    var n = A.n;
    if (r === r1) {
        result += "consistent...";
        if (r1 === n) result += "and determinate...";
        else result += "and indeterminate...";
    }
    else result += "inconsistent...";
    return result;
}

function whatSSystemOfEquations(A) {
    var result = "System of equations is ...";
    if (A.m === A.n) {
        if (A.det != 0) result += "determinate...";
        else result += "indeterminate or inconsistent...";
    }
    else result += "?";
    return result;
}
/*
let A = new Matrix(2,2,5,-2);
let B = new Matrix(2,3,1,-4);
let C = new Matrix(2,2,1,-4);

console.log(whatSSystemOfEquations(A, A, 1));

console.log(whatSSystemOfEquations(A));
console.log(whatSSystemOfEquations(B));
console.log(whatSSystemOfEquations(C));
*/