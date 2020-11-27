import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

import * as destinationData from "./destinations.js";
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
        this.articles = destinationData.default;
    }

    render() {
        return html`${
            this.articles.map((art) => {
                return html`
                    <article-destinations class="art"
                        .title="${art.title}"
                        .link="${art.link}"
                        .image="${art.image}"
                        .content="${art.content}"
                    ></article-destinations>
                `;
            })
        }`;
    }
}

customElements.define('art-container', Articles);
