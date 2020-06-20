export default class Matrix {
    private rows: number;
    private cols: number;

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
    }

    public showDetails() {
        console.log(`${this.rows}x${this.cols}`);
    }
}
