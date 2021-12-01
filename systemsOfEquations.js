class Matrix {
    constructor(m, n, rank, det) {
        this.m = m;
        this.n = n;
        this.rank = rank;
        this.det = det;
    }
}

function whatSSystemOfEquations(A, Aa, numberOfUnknowns) {
    var result = "System of equations is ...";
    var r = A.rank, r1 = Aa.rank;
    var n = numberOfUnknowns;
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