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
            <form @submit="${this.handleSubmit}">
                <input name="newTodo" id="newTodo" type="text" placeholder="New todo...">
                <input type="submit" value="Add todo">
            </form>
            <ul style="list-style-type:none;">
                ${this.todos.map((todo, index) => {
                    return html`
                        <my-todo .myid=${index} .name="${todo.name}" .done=${todo.done}
                            @changeStateNoEdit="${this.handleStateNoEdit}"
                            @checkboxClickEvent="${this.handleCheckboxClicked}">
                            @changeName="${this.handleChangeName}">
                        </my-todo>`;
                })}
            </ul>
        `;
    }

    handleStateNoEdit(event) {
        
    }

    handleChangeName(event) {
        console.log(event);
        const id = event.detail.myid;
        const name = event.detail.name;

        let newTodos = [...this.todos];
        newTodos[id].state = name;
        this.todos = newTodos;
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        this.todos = [...this.todos, {
            name: formData.get('newTodo'),
            done: false
        }];
    }

    handleCheckboxClicked(event) {
        const id = event.detail.myid;
        const done = event.detail.done;

        let newTodos = [...this.todos];
        newTodos[id].done = done;
        this.todos = newTodos;
    }
}

customElements.define('my-todos', Todos);
