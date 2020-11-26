import {
    LitElement,
    html,
    css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

class Todos extends LitElement {
    static get styles() {
        return css`
            .todo-checked { text-decoration: line-through; }
        `;
    }
    
    static get properties() {
        return {
            todos: { type: Array },
            title: { type: String }
        }
    }

    constructor() {
        super();
        this.title = 'My list';
        this.todos = [
            {
                name: 'Task 1',
                done: true
            },
            {
                name: 'Task 2',
                done: true
            },
            {
                name: 'Task 3',
                done: false
            }
        ];
    }

    render() {
        return html`
            <h2>${this.title}</h2>
            <ul style="list-style-type:none;">
                ${this.todos.map((todo, index) => {
                    return html`
                        <li class="${todo.done ? "todo-checked" : ""}">
                            <input type="checkbox" ?checked=${todo.done} @click=${(event) => this.handleChecked(event, index)}> ${todo.name}
                        </li>`;
                })}
            </ul>
        `;
    }

    handleChecked(event, index) {
        const newTodos = [...this.todos];
        newTodos[index].done = event.target.checked;
        this.todos = newTodos;
    }
}

customElements.define('my-todos', Todos);
