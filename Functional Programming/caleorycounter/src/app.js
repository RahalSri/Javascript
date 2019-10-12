import { diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';

//impure code below

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
        currentView = newView;
    }
}

export default app;