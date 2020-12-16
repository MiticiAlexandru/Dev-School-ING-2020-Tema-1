/* eslint-disable no-unused-vars */
import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'lit-element';

import './Articles/articlesHome.js';
import './Articles/articlesDest.js';
import './utils';
import style from './Articles/articleStyle.js';
import axios from 'axios';
/* eslint-enable no-unused-vars */

class DestComponent extends LitElement {
    static get styles() {
        return css`${unsafeCSS(style.styleRoot)}`;
    }

    render() {
        return html`
        <div id="main-root">

        <script type="module" src="../JS/Articles/articlesDest.js"></script>
        <script src="../JS/utils.js"></script>
        <script type="module" src="../JS/navigation.js"></script>

        <header>
            <navigation-element>
                <span id="titleSpan" slot="title">Destinations</span>
            </navigation-element>
        </header>

        <art-container-dest id="grd">

        </art-container-dest>

        <div id="imgFullscreenContainer">
            <button id="imgFullscreenButton" class="imgFullscreenButtonClose"
            onClick="closeFullscreen()"></button>
        </div>

        <footer>
            <my-footer></my-footer>
        </footer>

        </div>
        `;
    }
}

export default customElements.define('dest-component', DestComponent);
