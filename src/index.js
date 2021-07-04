import _ from 'lodash';

import './style.css';


function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Webpack-dev-server'], ' ');

    return element;
}
document.body.appendChild(component());