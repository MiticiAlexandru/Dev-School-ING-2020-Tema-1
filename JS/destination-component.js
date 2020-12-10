import {
    LitElement,
    html,
    css
} from 'lit-element';

import './Articles/articlesHome.js';
import './Articles/articlesDest.js';
import axios from 'axios';

class DestComponent extends LitElement {
    render() {
        return html`
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
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        `;
    }

    static get styles() {
        return css`
            :root {
                --gray1: rgb(138, 138, 138);
                --gray2: rgb(218, 218, 218);
                --gray3: rgb(245, 245, 245);
            
                --themeLightGreen: rgba(64, 247, 223);
                --themeLightBlue: rgba(64, 177, 247);
                --themeRed: rgba(222, 52, 92);
                --themeBrown: rgba(147, 36, 50);
                --themeViolet: rgba(60, 24, 116);
                --themeGrayGreen: rgba(40, 55, 71);
                --themeDarkBlue: rgb(6, 58, 95);
            }
            
            body {
                margin: 0;
                color: var(--gray1);
                font-family: Verdana;
                background-image: linear-gradient(to top right, var(--themeLightGreen), var(--themeDarkBlue));
                background-attachment: fixed;
            }
            
            header {
                width: 100%;
                text-align: center;
                font-size: 2.5vw;
            
                padding-top: 1.5%;
                padding-bottom: 0;
            
                background-color: white;
            }
            
            h1 {
                margin-top: 0;
                margin-bottom: 0;
                padding-bottom: 0.25%;
                color: var(--themeDarkBlue);
            }
            
            h2 {
                margin-top: 0;
                margin-bottom: 0;
                color: var(--themeDarkBlue);
            }
            
            #homeDescription {
                background-color: white;
                padding-left: 5%;
                padding-right: 5%;
                padding-top: 2.5%;
                padding-bottom: 2.5%;
                width: 90%;
            }
            
            #titleImage {
                max-width: 100%;
                height: auto;
                vertical-align: middle;
                object-fit: contain;
            }
            
            #grd {
                padding-top: 1.375%;
                padding-bottom: 1.375%;
            }
            
            .languageForm {
                background-color: white;
            
                padding: 1.25%;
                border-radius: 12px;
                margin-top: 1.375%;
                margin-bottom: 1.375%;
                margin-left: 2.75%;
                margin-right: 2.75%;
            }
            
            .languageFormTitle {
                width: 100%;
                text-align: center;
            }
            
            .languageFormElement {
                width: 5%;
                margin-left: 45%;
                text-align: center;
            }
            
            .languageFormSubmit {
                width: 15%;
                margin-left: 45%;
                text-align: center;
            }
            
            .link {
                color: var(--gray1);
            }
            
            .link:hover {
                color: var(--gray2);
            }
            
            .navBar ul li {
                box-sizing: border-box;
            
                padding-left: 20px;
                padding-right: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
            
                border-radius: 12px;
                background-color: var(--gray3);
            }
            
            #imgFullscreenContainer {
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
            
                position: fixed;
                z-index: 1;
                background-color: rgba(0, 0, 0, 0.9);
                display: none;
            }
            
            .imgFullscreenButton {
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                padding: 0;
                margin: 0;
                border: 0;
                background-color: rgba(0, 0, 0, 0);
            }
            
            .imgFullscreenButtonClose {
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                padding: 5%;
                margin: 0;
                border: 0;
                background-color: rgba(0, 0, 0, 0);
            }
            
            .imgFullscreen {
                max-width: 100%;
                max-height: 100%;
                vertical-align: middle;
                object-fit: contain;
                left: 0;
                top: 0;
            }
        `;
    }
}

export default customElements.define('dest-component', DestComponent);
