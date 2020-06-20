import ControlsBuilder from "./builders/ControlsBuilder";
import ElementBuilder from "./builders/ElementBuilder";

export default class MatrixControls {
    private _controlsBuilder: ControlsBuilder;
    private _elementBuilder: ElementBuilder;
    private _tableElement: Element;

    constructor(tableElement: Element) {
        this._tableElement = tableElement;
    }

    public addRow() {
        const row = this._elementBuilder.createTableRow();
        this._tableElement.appendChild(row);
    }

    public addColumn() {
        const rows = this._tableElement.querySelectorAll('tr');

        rows.forEach(row => {
            const column = this._elementBuilder.createTableColumn();
            row.appendChild(column);
        });
    }
}