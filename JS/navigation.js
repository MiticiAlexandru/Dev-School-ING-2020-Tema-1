import {
    LitElement,
    html,
    css,
    unsafeCSS
} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

import style from './Articles/articleStyle.js';

class Navigation extends LitElement {
    static get styles() {
        return css`${unsafeCSS(style.styleNav)}`;
    }

    render() {
        return html`<div class="nav"><ul>
        <li>
            <a href="./home.html">Home</a>
        </li>
        <li>
            <a href="./destinations.html">Destinations</a>
        </li>
        <li>
            <a href="./language.html">Languages</a>
        </li>
        </ul></div>
        <slot name="title"></slot>`;
    }

    connectedCallback() {
        super.connectedCallback();
        const iAmYoda = new Promise((resolve, reject) => {
            const person = 'Yoda'
            if(person == 'Yoda')
                resolve('I am Yoda');
            else
                reject(`I am ${person}`);
        });
        const promise2 = new Promise((resolve, reject) => {
            setTimeout(resolve, 700, 'Mando = cool');
        });
        const promise3 = new Promise((resolve, reject) => {
            setTimeout(resolve, 500, '501st 4ever');
        });
        const promise4 = new Promise((resolve, reject) => {
            setTimeout(resolve, 700, 'Jedi Master');
        });
        const promise5 = new Promise((resolve, reject) => {
            setTimeout(reject, 500, 'Jedi Knight');
        });

        Promise.all([iAmYoda, promise2, promise3]).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            console.log('This is the way');
        });

        Promise.any([promise4, promise5]).then((response) => {
            console.log('any (res): ' + response);
        }).catch((error) => {
            console.log('any (err): ' + error);
        });

        Promise.race([promise4, promise5]).then((response) => {
            console.log('race (res): ' + response);
        }).catch((error) => {
            console.log('race (err): ' + error);
        });

        this.getPosts();
        this.getPosts2();
    }

    getPosts() {
        const axios = window.axios;

        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        }, {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: 'Bearer ceva-token'
            }
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });

        axios.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'post',
            data: {
                title: 'foo',
                body: 'bar',
                userId: 1
            }
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });

        const request = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com/',
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: 'Bearer ceva-token'
            }
        })

        request.get('posts').then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });

        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
            response.json().then((data) => console.log(data));
        });

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            })
        }).then((response) => {
            response.json().then((data) => console.log(data));
        });
    }

    async getPosts2() {
        const axios = window.axios;

        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log('Async: ', res);
        } catch(err) {
            console.log(err);
        }
    }
}

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

customElements.define('navigation-element', Navigation);
customElements.define('my-footer', Footer);
