export class Matrix {
        rows: number[][];
        columns: number[][];
        constructor(matrix: string) {
            this.rows = matrix.split('\n').map((row: string) => row.split(' ').map(Number));
            this.columns = this.rows[0].map((_, index: number) => this.rows.map((row: number[]) => row[index]));
        }
    }
  