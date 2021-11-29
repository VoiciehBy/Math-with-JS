function factorial(x) {
    if (x === 0 || x === 1)
        return 1;
    else {
        var result = 1;
        for (i = 2; i < x + 1; i++)
            result *= i;
        return result;
    }
}

function permutationOf(n) {
    return factorial(n);
}

function binomialCoefficent(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function combination(n, k) {
    return binomialCoefficent(n, k);
}