import {Router} from '@vaadin/router';
import './main-component.js';
import './destination-component.js';
import './languages-component.js';

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
    {path: '/', component: 'main-component'},
    {path: '/home', component: 'main-component'},
    {path: '/destinations', component: 'dest-component'},
    {path: '/language', component: 'lang-component'},
]);
