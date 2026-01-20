import { InputDefault } from "../../default/Input/index.js";
import { SpanDefault } from "../../default/Span/index.js";
import { HBoxDefault } from "../../default/HBox/index.js";
export class SelectFactory {
    _props;
    constructor(props) {
        this._props = props;
    }
    createSelect() {
        const select = document.createElement("div");
        select.classList.add("select");
        if (this._props.id)
            select.id = this._props.id;
        return select;
    }
    createInput() {
        const input = new InputDefault({
            variant: "text",
            editable: this._props.searchable,
            placeholder: this._props.placeholder,
            width: this._props.width,
            required: this._props.required,
            name: this._props.name
        });
        if (this._props.editable ?? true) {
            input._input.classList.remove("readOnly");
        }
        return input._input;
    }
    createOptionContainer(input) {
        const optionContainer = document.createElement("div");
        optionContainer.classList.add("optionContainer");
        optionContainer.style.minWidth = `calc(${this._props.width ?? "100%"} - var(--half-padding) - 2px)`;
        for (var i = 0; i < this._props.options.length; i++) {
            const option = this.createOption(this._props.options[i], input);
            optionContainer.appendChild(option);
        }
        if (this._props.editable ?? true) {
            input.addEventListener("click", (_e) => {
                if (optionContainer.classList.contains("open")) {
                    optionContainer.classList.remove("open");
                    if (this._props.searchable && !this._props.options.includes(input.value)) {
                        input.value = "";
                    }
                }
                else {
                    optionContainer.classList.add("open");
                }
            });
            if (this._props.searchable) {
                input.addEventListener("keyup", (e) => {
                    this.filterItems(optionContainer, e.target.value);
                });
            }
        }
        return optionContainer;
    }
    createOption(text, input) {
        let children = [];
        if (this._props.multiselect) {
            const checkbox = new InputDefault({
                variant: "checkbox",
                value: text
            });
            checkbox._input.addEventListener("change", (e) => {
                if (e.target.checked) {
                    if (input.value.length > 0) {
                        input.value += `, ${text}`;
                    }
                    else {
                        input.value = text;
                    }
                }
                else {
                    const values = input.value.split(", ");
                    const index = values.indexOf(text);
                    if (index > -1) {
                        values.splice(index, 1);
                    }
                    input.value = values.join(", ");
                }
            });
            if (this._props.selected?.split(",").includes(text)) {
                checkbox._input.checked = true;
                if (input.value.length > 0) {
                    input.value += `, ${text}`;
                }
                else {
                    input.value = text;
                }
            }
            children.push(checkbox._input);
        }
        const option = new SpanDefault(text);
        children.push(option._span);
        const optionGroup = new HBoxDefault({
            children: children
        });
        optionGroup._hBox.classList.add("option");
        if (!this._props.multiselect) {
            optionGroup._hBox.addEventListener("click", (_e) => {
                input.value = text;
                input.click();
            });
            if (this._props.selected === text) {
                input.value = text;
            }
        }
        return optionGroup._hBox;
    }
    filterItems(optionContainer, filterKey) {
        Array.from(optionContainer.children).forEach((child) => {
            if (child.children[0].textContent.toLowerCase().startsWith(filterKey.toLowerCase()))
                child.classList.remove("filter");
            else
                child.classList.add("filter");
        });
    }
}
