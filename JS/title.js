import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'lit-element';

import style from './Articles/articleStyle.js';

class Title extends LitElement {
    constructor() {
        super();
        this.theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
    }

    static get properties() {
        return {
            theme: {type: String}
        };
    }

    static get styles() {
        return css`${unsafeCSS(style.styleNav)}`;
    }

    render() {
        return html`
        <div id="title-container">
            <h1>
                <slot name="title"></slot>
            </h1>

            <button id="translateButton" @click="${this.clickTranslate}">
                <img src="./img/translate_icon.png" class="topButtonImage">
            </button>
        </div>`;
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

export default customElements.define('title-element', Title);
