import {
    LitElement,
    html,
    css
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

import "./todo.js";

class Todos extends LitElement {
    static get styles() {
        return css`
            
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
                        <my-todo .name="${todo.name}" .done=${todo.done}></my-todo>`;
                })}
            </ul>
        `;
    }
}

customElements.define('my-todos', Todos);
