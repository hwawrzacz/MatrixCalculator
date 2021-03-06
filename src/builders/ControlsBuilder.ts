export default class ControlsBuilder {

    constructor() { }

    public createAddRowButton(): Element {
        let button = document.createElement('button');
        let icon = this.createButtonIcon();

        button.classList.add('add-row');
        button.appendChild(icon);

        return button;
    }

    public createAddButton(className: string): Element {
        let button = document.createElement('button');
        let icon = this.createButtonIcon();

        button.classList.add(className);
        button.appendChild(icon);

        return button;
    }

    public createRemoveColumnButton(): Element {
        let button = document.createElement('button');
        let icon = this.createButtonIcon();

        button.classList.add('remove-column')
        button.appendChild(icon);

        return button;
    }

    private createButtonIcon(): Element {
        let icon = document.createElement('i');

        icon.classList.add('material-icons');
        icon.innerHTML = 'add';

        return icon;
    }
}