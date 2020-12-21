import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'lit-element';

import style from './Articles/articleStyle.js';

class Footer extends LitElement {
    static get styles() {
        return css`${unsafeCSS(style.styleFooter)}`;
    }

    render() {
        return html`
            <div class="my-footer">
                &#169; - Devschool 2020
            </div>`;
    }
}

export default customElements.define('my-footer', Footer);
