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
            name: {type: String},
            done: {type: Boolean}
        };
    }

    render() {
        return html`
            <div class="${this.done ? "todo-checked" : ""}">
                <input type="checkbox" ?checked=${this.done} @click=${(event) => this.handleChecked(event, index)}> ${this.name}
            </div>
        `;
    }

    handleChecked(event, index) {
        const newTodos = [...this.todos];
        newTodos[index].done = event.target.checked;
        this.todos = newTodos;
    }
}

export default customElements.define("my-todo", Todo);
