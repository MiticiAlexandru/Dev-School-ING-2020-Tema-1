import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'lit-element';

import './navigation';
import './footer';
import './utils';
import './f';
import style from './Articles/articleStyle.js';

class LangComponent extends LitElement {
    static get styles() {
        return css`${unsafeCSS(style.styleRoot)}`;
    }

    render() {
        return html`
        <div id="main-root">

        <header>
            <navigation-element>
                <h1 slot="title">Language</h1>
            </navigation-element>
        </header>

        <section id="grd">
            <form action="./language" class="languageForm" id="languageForm">
                <h2 class="languageFormTitle">Change the language</h2> <p class="languageFormTitle">Available languages:</p>
                <INPUT TYPE="Radio" class="languageFormElement" Name="language" Value="en" Checked>English
                <INPUT TYPE="Radio" class="languageFormElement" Name="language" Value="fr">French
                <INPUT TYPE="Radio" class="languageFormElement" Name="language" Value="de">German
                <INPUT TYPE="Radio" class="languageFormElement" Name="language" Value="it">Italian
                <INPUT TYPE="Radio" class="languageFormElement" Name="language" Value="es">Spanish
                <INPUT TYPE="Radio" class="languageFormElement" Name="language" Value="ja">Japanese
                <INPUT TYPE="Radio" class="languageFormElement" Name="language" Value="zh-CN">Chinese
                <INPUT TYPE="Radio" class="languageFormElement" Name="language" Value="hi">Hindi
                <INPUT TYPE="Radio" class="languageFormElement" Name="language" Value="ar">Arabic
                <p></p>
                <input type="submit" class="languageFormSubmit" value="Change" disabled>
            </form>

            <div id="google_translate_element" hidden></div>

            <script type="text/javascript">
            function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
            }
            </script>
        </section>

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

export default customElements.define('lang-component', LangComponent);
