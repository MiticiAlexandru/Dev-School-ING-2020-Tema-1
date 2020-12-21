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
        <title-element>
            <span id="titleSpan" slot="title">Destinations</span>
        </title-element>

        <div id="main-root">

        <art-container-dest id="grd">

        </art-container-dest>

        <div id="imgFullscreenContainer">
            <button id="imgFullscreenButton" class="imgFullscreenButtonClose"
            onClick="closeFullscreen()"></button>
        </div>

        </div>
        `;
    }
}

export default customElements.define('dest-component', DestComponent);
