class squareMatrix {
    constructor(n) {
        this.n = n;
        this.v = new Array(n);
        for (i = 0; i < n; i++)
            v[i] = new Array(n);
    }
    setArray(array, n) {
        for (i = 0; i < n; i++)
            for (j = 0; j < n; j++)
                this.v[i][j] = array[i][j]
    }
    determinant() {
        if (this.n === 2) {
            var a = this.v[0][0] * this.v[1][1];
            var b = this.v[1][0] * this.v[0][1];
            return a - b;
        }
        else if (this.n === 3) {
            var a = this.v[0][0] * this.v[1][1] * this.v[2][2];
            var b = this.v[1][0] * this.v[2][1] * this.v[0][2];
            var c = this.v[2][0] * this.v[0][1] * this.v[2][2];
            var d = this.v[0][2] * this.v[1][1] * this.v[2][0];
            var e = this.v[1][2] * this.v[2][1] * this.v[0][0];
            var f = this.v[2][2] * this.v[0][1] * this.v[1][0];
            var g = a + b + c;
            var h = d + e + f;
            return g - h;
        }
        else
            return "?";
    }
}
