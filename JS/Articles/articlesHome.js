import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

import style from './articleStyle.js';
import "./article.js";

class Articles extends LitElement {
    static get styles() {
        return css`${unsafeCSS(style.styleList)}`;
    }
    
    static get properties() {
        return {
            articles: { type: Array }
        }
    }

    constructor() {
        super();
        this.articles = [];
    }

    render() {
        return html`${
            this.articles.map((art) => {
                return html`
                    <article-home class="art"
                        .title="${art.title}"
                        .subtitle="${art.subtitle}"
                        .image="${art.image}"
                        .content="${art.content}"
                        .alignleft="${art.alignleft}"
                    ></article-home>
                `;
            })
        }`;
    }

    connectedCallback() {
        super.connectedCallback();

        fetch('https://devschool-2020.firebaseio.com/alexandru-mitici/home.json').then((response) => {
            response.json().then((data) => this.articles = data["-MNste_K-ry7UK3c6X7k"].data);
        });
    }
}

customElements.define('art-container', Articles);
