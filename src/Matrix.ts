import MatrixControls from "./MatrixControls";
import ElementBuilder from "./builders/ElementBuilder";
import ControlsBuilder from "./builders/ControlsBuilder";

export default class Matrix {
    private _tableWrapper: Element;
    private _DOMTable: Element;
    private rows: number;
    private cols: number;
    private _matrixControls: MatrixControls;
    private _controlsBuilder: ControlsBuilder;
    private _elementBuilder: ElementBuilder;

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
        this._controlsBuilder = new ControlsBuilder();
        this._elementBuilder = new ElementBuilder();

        this.initializeTable();
        document.body.appendChild(this._tableWrapper);
    }

    private initializeTable() {
        const addColumnButton = this._controlsBuilder.createAddColumnButton();
        const addRowButton = this._controlsBuilder.createAddRowButton();

        this._tableWrapper = this._elementBuilder.createTableWrapper();
        this._DOMTable = this._elementBuilder.createTable(this.rows, this.cols);
        this._tableWrapper.appendChild(this._DOMTable);
        this._tableWrapper.appendChild(addColumnButton);
        this._tableWrapper.appendChild(addRowButton);

        this._matrixControls = new MatrixControls(this._DOMTable);
    }

    public showDetails() {
        console.log(`${this.rows}x${this.cols}`);
    }
}
