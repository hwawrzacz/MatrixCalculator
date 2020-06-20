import ControlsBuilder from "../builders/ControlsBuilder";
import ElementBuilder from "../builders/ElementBuilder";

export default class MatrixControls {
    private _controlsBuilder: ControlsBuilder;
    private _elementBuilder: ElementBuilder;
    private _tableElement: Element;

    constructor(tableElement: Element) {
        this._tableElement = tableElement;
        this._elementBuilder = new ElementBuilder();
    }

    public addRow(columns: number) {
        const tbody = this._tableElement.querySelector('tbody');
        const row = this._elementBuilder.createTableRow();

        for (let c = 0; c < columns; c++) {
            const column = this._elementBuilder.createTableColumn();
            row.appendChild(column);
        }

        tbody.appendChild(row);
    }

    public addColumn() {
        const rows = this._tableElement.querySelectorAll('tr');

        rows.forEach(row => {
            const column = this._elementBuilder.createTableColumn();
            row.appendChild(column);
        });
    }
}