import MatrixControls from "./MatrixControls";
import ElementBuilder from "../builders/ElementBuilder";
import ControlsBuilder from "../builders/ControlsBuilder";

export default class Matrix {
    private _tableWrapper: Element;
    private _DOMTable: Element;
    private _rows: number;
    private _cols: number;
    private _matrixControls: MatrixControls;
    private _controlsBuilder: ControlsBuilder;
    private _elementBuilder: ElementBuilder;

    constructor(rows: number, cols: number) {
        this._rows = rows;
        this._cols = cols;
        this._controlsBuilder = new ControlsBuilder();
        this._elementBuilder = new ElementBuilder();

        this.initializeTable();
    }

    public getMatrixWrapper(): Element {
        return this._tableWrapper;
    }

    private initializeTable() {
        const addColumnButton = this._controlsBuilder.createAddButton('add-column');
        const addRowButton = this._controlsBuilder.createAddButton('add-row');

        addColumnButton.addEventListener('click', this.addColumn);
        addRowButton.addEventListener('click', this.addRow);

        this._tableWrapper = this._elementBuilder.createTableWrapper();
        this._DOMTable = this._elementBuilder.createTable(this._rows, this._cols);
        this._tableWrapper.appendChild(this._DOMTable);
        this._tableWrapper.appendChild(addColumnButton);
        this._tableWrapper.appendChild(addRowButton);

        this._matrixControls = new MatrixControls(this._DOMTable);
    }

    private addColumn = () => {
        this._cols++;
        this._matrixControls.addColumn();
    }

    private addRow = () => {
        this._rows++;
        this._matrixControls.addRow(this._cols);
    }
}
