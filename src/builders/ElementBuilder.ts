export default class ElementBuilder {

    constructor() { }

    public createTableWrapper(): Element {
        const tableWrapper = document.createElement('div');
        tableWrapper.classList.add('matrix-wrapper');

        return tableWrapper;
    }

    public createTable(rows: number, cols: number): Element {
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');

        table.classList.add('matrix');

        for (let r = 0; r < rows; r++) {
            const row = this.createTableRow();

            for (let c = 0; c < cols; c++) {
                const col = this.createTableColumn();
                row.appendChild(col);
            }
            tbody.appendChild(row);
        }
        table.appendChild(tbody);

        return table;
    }

    public createTableRow(): Element {
        const row = document.createElement('tr');
        return row;
    }

    public createTableColumn(): Element {
        const column = document.createElement('td');
        const input = this.createMatrixInput();
        column.appendChild(input);

        return column;
    }

    private createMatrixInput(): Element {
        const input = document.createElement('input');
        input.classList.add('matrix-input');
        input.setAttribute('type', 'number');

        return input;
    }
}