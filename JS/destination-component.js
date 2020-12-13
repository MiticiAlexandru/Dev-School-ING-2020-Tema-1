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
                <h1 slot="title">Destinations</h1>
            </navigation-element>
        </header>

        <art-container-dest id="grd">

        </art-container-dest>

        <div id="imgFullscreenContainer">
            <button id="imgFullscreenButton" class="imgFullscreenButtonClose"
            onClick="closeFullscreen()"></button>
        </div>

        <div id="google_translate_element" hidden></div>

        <script type="text/javascript">
        function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
        }
        </script>

        <script type="text/javascript" src="../JS/f.js"></script>

        <footer>
            <my-footer></my-footer>
        </footer>

        <script>
            window.onload = () => {
                var frame = document.querySelector("iframe");
                frame.onload = changeLanguageInit(frame, true);
            }
        </script>

        </div>
        `;
    }
}

export default customElements.define('dest-component', DestComponent);
