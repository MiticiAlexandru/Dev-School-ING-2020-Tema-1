import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'lit-element';

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

    connectedCallback() {
        super.connectedCallback();

        fetch('https://devschool-2020.firebaseio.com/alexandru-mitici/destination.json').then((response) => {
            response.json().then((res) => this.articles = res["-MNsu2urcprKRMp6LEKT"].data);
        });
    }
}

customElements.define('art-container-dest', Articles);
