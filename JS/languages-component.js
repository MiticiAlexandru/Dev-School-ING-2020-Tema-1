import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'lit-element';

import './navigation';
import './footer';
import './utils';
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
                <span id="titleSpan" slot="title">Language</span>
            </navigation-element>
        </header>

        <section id="grd">
            <div class="languageForm">
                <form id="languageForm">
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
                </form>
                <button class="languageFormSubmit" @click="${this.handleSubmit}">Change</button>
            </div>
        </section>

        <footer>
            <my-footer></my-footer>
        </footer>

        </div>
        `;
    }

    handleSubmit() {
        var list = this.shadowRoot.querySelectorAll('.languageFormElement');
        for(let i=0; i<list.length; i++) {
            if(list[i].checked)
                sessionStorage.lang = list[i].value;
        }
    }
}

export default customElements.define('lang-component', LangComponent);
