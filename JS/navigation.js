import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'lit-element';

import style from './Articles/articleStyle.js';

const refTable = [
    {
        link: '/',
        id: '#homeLink'
    },
    {
        link: '/home',
        id: '#homeLink'
    },
    {
        link: '/destinations',
        id: '#destinationsLink'
    },
    {
        link: '/language',
        id: '#languageLink'
    }
];

class Navigation extends LitElement {
    static get styles() {
        return css`${unsafeCSS(style.styleNav)}`;
    }

    render() {
        return html`<div class="nav"><ul>
        <li>
            <a href="./home" id="homeLink">Home</a>
        </li>
        <li>
            <a href="./destinations" id="destinationsLink">Destinations</a>
        </li>
        <li>
            <a href="./language" id="languageLink">Languages</a>
        </li>
        </ul></div>`;
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('vaadin-router-location-changed', () => {
            window.sessionStorage.locationId = refTable.filter((v) => v.link == window.location.pathname)[0].id;
            this.shadowRoot.querySelectorAll('a').forEach((listItem) => {
                listItem.classList.remove('active');
                listItem.classList.add('inactive');
            });
            this.shadowRoot.querySelector(window.sessionStorage.locationId).classList.remove('inactive');
            this.shadowRoot.querySelector(window.sessionStorage.locationId).classList.add('active');
        });
        window.sessionStorage.locationId = refTable.filter((v) => v.link == window.location.pathname)[0].id;
        setTimeout(() => {this.shadowRoot.querySelector(window.sessionStorage.locationId).classList.add('active')}, 0);
    }
}

export default customElements.define('navigation-element', Navigation);
