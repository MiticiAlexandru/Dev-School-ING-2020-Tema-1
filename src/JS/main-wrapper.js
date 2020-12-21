/* eslint-disable no-unused-vars */
import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'lit-element';

import './Articles/articlesHome.js';
import './Articles/articlesDest.js';
import './navigation';
import './footer';
import './utils';
import style from './Articles/articleStyle.js';
import axios from 'axios';
/* eslint-enable no-unused-vars */

class MainWrapper extends LitElement {
    static get styles() {
        return css`${unsafeCSS(style.styleRoot)}`;
    }

    render() {
        return html`
        <div id="main-root">

        <header>
            <navigation-element></navigation-element>
        </header>
        
        <slot></slot>

        <footer>
            <my-footer></my-footer>
        </footer>

        </div>
        `;
    }
}

export default customElements.define('main-wrapper', MainWrapper);
