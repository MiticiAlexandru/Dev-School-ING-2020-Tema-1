import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'lit-element';

import style from './Articles/articleStyle.js';

class Navigation extends LitElement {
    static get styles() {
        return css`${unsafeCSS(style.styleNav)}`;
    }

    render() {
        return html`<div class="nav"><ul>
        <li>
            <a href="./home">Home</a>
        </li>
        <li>
            <a href="./destinations">Destinations</a>
        </li>
        <li>
            <a href="./language">Languages</a>
        </li>
        </ul></div>
        <slot name="title"></slot>`;
    }
}

export default customElements.define('navigation-element', Navigation);
