import {
    LitElement,
    html,
    css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

class Todo extends LitElement {
    static get styles() {
        return css`
            .todo-checked { text-decoration: line-through; }
        `;
    }

    static get properties() {
        return {
            myid: {type: Number},
            name: {type: String},
            done: {type: Boolean},
            state: {type: String}
        };
    }

    render() {
        return html`
            <div class="${this.done ? "todo-checked" : ""}">
                ${this.state=='editing'?
                    html`<input id="newName" type="text" value=${this.name}>
                        <button @click="${this.handleSave}">Save</button>
                        <button @click="${this.handleCancel}">Cancel</button>`
                    : html`
                        <input type="checkbox" ?checked=${this.done} @click=${(event) => this.handleCheckboxClicked(event)}> ${this.name}
                        ${this.name}
                        <button @click="${this.handleEditClick}">Edit</button>`}
            </div>
        `;
    }

    handleEditClick(event) {
        this.state = 'editing';
    }

    handleCancel(event) {
        
    }

    handleSave(event) {
        console.log(event);
        this.state = '';
        this.dispatchEvent(new CustomEvent('changeName', {
            detail: {
                name: this.shadowRoot.querySelector("#newName").value,
                myid: this.myid
            }
        }));
    }

    handleCheckboxClicked(event) {
        this.dispatchEvent(new CustomEvent('checkboxClickEvent', {
            detail: {
                myid: this.myid,
                done: event.target.checked
            }
        }));
    }
}

export default customElements.define("my-todo", Todo);
