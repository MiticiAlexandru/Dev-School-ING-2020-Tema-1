import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

import style from './articleStyle.js';

function clickOpenFullscreen(image) {
    document.getElementById("imgFullscreenButton").innerHTML = 
        `<img class="imgFullscreen" src="../img/${image}" alt="${image}"></img>`;
    document.getElementById("imgFullscreenContainer").style.display = "block";
}

class ArticleHome extends LitElement {
    static get styles() {
        return css`${unsafeCSS(style.style)}`;
    }

    static get properties() {
        return {
            title: {type: String},
            subtitle: {type: String},
            image: {type: String},
            content: {type: String},
            alignleft: {type: Boolean}
        };
    }

    render() {
        if(this.alignleft)
            return html`
                <div class="art_home_img">
                    <img class="artImg" src="../img/${this.image}" alt="${this.image}"
                        @click=${() => this.handleClick(this.image)}
                    </img>
                </div>
                <div class="art_home_text_0">
                    <h2>${this.title}</h2>
                    <h3>${this.subtitle}</h3>
                    ${this.content}
                </div>
            `;
        else
            return html`
                <div class="art_home_text_1">
                    <h2>${this.title}</h2>
                    <h3>${this.subtitle}</h3>
                    ${this.content}
                </div>
                <div class="art_home_img">
                    <img class="artImg" src="../img/${this.image}" alt="${this.image}"
                        @click=${() => this.handleClick(this.image)}
                    </img>
                <div>
            `;
    }

    handleClick(image) {
        clickOpenFullscreen(image);
    }
}

class ArticleDestinations extends LitElement {
    static get styles() {
        return css`${unsafeCSS(style.style)}`;
    }

    static get properties() {
        return {
            title: {type: String},
            link: {type: String},
            image: {type: String},
            content: {type: String}
        };
    }

    render() {
        return html`
            <div class="art_destination_img">
                <img class="artImg" src="../img/${this.image}" alt="${this.image}"
                    @click=${() => this.handleClick(this.image)}
                </img>
            </div>
            <div class="art_destination_text">
                <h2> ${this.title} </h2>
                <br> ${this.content} <br> <br>
                <a href="${this.link}"  target="_blank" class="link">Click here for more info..
                </a>
            </div>
        `;
    }

    handleClick(image) {
        clickOpenFullscreen(image);
    }
}

const artHome = customElements.define("article-home", ArticleHome);
const artDest = customElements.define("article-destinations", ArticleDestinations);

export default { artHome, artDest };
