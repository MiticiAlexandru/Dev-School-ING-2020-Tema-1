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

        <h1>
            <slot name="title"></slot>
        </h1>

        <button id="translateButton" @click="${this.clickTranslate}">
            <img src="./img/translate_icon.png" class="translateButtonImage">
        </button>`;
    }

    clickTranslate() {
        // Check if we need to translate:
        const lang = sessionStorage.lang;
        if(lang) {
            var select = document.getElementsByClassName('goog-te-combo')[0];
            select.value = lang;

            if ("createEvent" in document) {
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                select.dispatchEvent(evt);
            }
            else {
                select.fireEvent("onchange");
            }
        }
    }
}

export default customElements.define('navigation-element', Navigation);
