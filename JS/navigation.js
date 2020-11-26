class Navigation extends HTMLElement {
    constructor() {
        super();
        const _style = document.createElement('style');
        const _nav = document.createElement('nav');

        _nav.innerHTML = `<div class="nav"><ul>
        <li>
            <a href="./home.html">Home</a>
        </li>
        <li>
            <a href="./destinations.html">Destinations</a>
        </li>
        <li>
            <a href="./language.html">Languages</a>
        </li>
        </ul></div>
        <slot name="title"></slot>`;
        _style.innerHTML = `.nav ul {
            width: calc(100% - 40px);
            list-style-type: none;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            grid-gap: 20px;
            padding: 0;
            padding-left: 20px;
            padding-right: 20px;
            margin-top: 0;
            margin-bottom: 1vh;
        }
        
        .nav ul li a {
            color: var(--gray1);
            text-decoration: none;
        }
        
        .nav ul li a:hover {
            color: var(--gray2);
        }
        
        .link {
            color: var(--gray1);
        }
        
        .link:hover {
            color: var(--gray2);
        }
        
        .nav ul li {
            box-sizing: border-box;
        
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
        
            border-radius: 12px;
            background-color: var(--gray3);
        }`;

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(_nav);
        this._shadowRoot.appendChild(_style);
    }

    static get observedAttributes() {
        return ['color'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log('Changed color `' + name + '` from ' + oldVal + ' to ' + newVal);
    }

    connectedCallback() {
        console.log("Hello from connected callback");
    }

    disconnectedCallback() {
        console.log("Hello from disconnected callback");
    }

    adoptedCallback() {
        console.log("Hello from adopted callback");
    }
}

customElements.define('navigation-element', Navigation);
