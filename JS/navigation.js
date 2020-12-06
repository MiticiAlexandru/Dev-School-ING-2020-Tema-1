import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

import style from './Articles/articleStyle.js';

class Navigation extends LitElement {
    static get styles() {
        return css`${unsafeCSS(style.styleNav)}`;
    }

    render() {
        return html`<div class="nav"><ul>
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
    }
}

class Footer extends LitElement {
    static get styles() {
        return css`${unsafeCSS(style.styleFooter)}`;
    }

    render() {
        return html`
            <div class="my-footer">
                &#169; - Devschool 2020
            </div>`;
    }
}

customElements.define('navigation-element', Navigation);
customElements.define('my-footer', Footer);
