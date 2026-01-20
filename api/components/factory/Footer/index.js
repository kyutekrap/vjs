export class FooterFactory {
    _props;
    constructor(props) {
        this._props = props;
    }
    createFooter() {
        const footer = document.createElement("div");
        footer.classList.add("footer");
        for (var i = 0; i < this._props.children.length; i++) {
            footer.appendChild(this._props.children[i]);
        }
        if (this._props.id)
            footer.id = this._props.id;
        return footer;
    }
}
