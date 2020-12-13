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

class MainComponent extends LitElement {
    static get styles() {
        return css`${unsafeCSS(style.styleRoot)}`;
    }

    render() {
        return html`
        <div id="main-root">

        <header>
            <navigation-element>
                <h1 slot="title">Home</h1>
            </navigation-element>
        </header>

        <picture>
            <source media="(max-width:650px)" srcset="../img/title_1.jpg">
            <img id="titleImage" src="../img/title_2.jpg" alt="Title image" style="width:auto;">
        </picture>

        <section id="homeDescription">
            <h2 style="text-align: center;">Travel site</h2> <br>
            <span translate="no"> Welcome to our travel site! On our home page you'll find some interesting articles related to this topic. Check out our destinations page as well. Bienvenue sur notre site de voyage! Sur notre page d'accueil, vous trouverez des articles intéressants liés à ce sujet. Consultez également notre page de destinations. Willkommen auf unserer Reiseseite! Auf unserer Homepage finden Sie einige interessante Artikel zu diesem Thema. Schauen Sie sich auch unsere Zielseite an. </span>
        </section>

        <art-container id="grd">

        </art-container>

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

export default customElements.define('main-component', MainComponent);
