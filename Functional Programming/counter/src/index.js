
import hh from 'hyperscript-helpers';
import { h, diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';

const { div, button } = hh(h);

const initModel = 0;

function view(dispatch, model) {
    return div([
        div({ className: 'mv2' }, `Count ${model}`),
        button({ className: 'pv1 ph2 mr2', onclick: () => dispatch('plus') }, '+'),
        button({ className: 'pv1 ph2', onclick: () => dispatch('minus') }, '-')
    ]);
};

function update(msg, model) {
    switch (msg) {
        case 'plus':
            return model + 1;
        case 'minus':
            return model - 1;
        default:
            return model;
    }
}

//impure code below
const node = document.getElementById('app');
function app(initModel, update, view, node) {
    let model = initModel;
    let currentView = view(dispatch, model);
    let rootNode = createElement(currentView);
    node.appendChild(rootNode);
    function dispatch(msg) {
        model = update(msg, model);
        const newView = view(dispatch, model);
        const patches = diff(currentView, newView);
        rootNode = patch(rootNode, patches);
        //currentView = newView; 
    }
}

app(initModel, update, view, node);