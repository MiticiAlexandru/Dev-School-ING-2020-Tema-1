import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

import * as homeData from "./home.js";
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
        this.articles = homeData.default;
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
}

customElements.define('art-container', Articles);
