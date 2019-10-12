import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import * as R from 'ramda';
import { showFormMsg, mealInputMsg, caloriesInputMsg, saveMealMsg, deleteMealMsg, editMealMsg } from './update';

const { pre, div, h1, button, label, input, form, tr, td, tbody, thead, table, i } = hh(h);

function fieldSet(labelText, inputValue, oninput) {
    return div([
        label({ className: 'db mb1' }, labelText),
        input({
            className: 'pa2 input-reset ba w-100 mb2',
            type: 'text',
            value: inputValue,
            oninput
        })
    ]);
}

function buttonSet(dispatch) {
    return div([
        button({ className: 'f3 pv2 ph3 bg-blue white bn mr2 dim', type: 'submit' }, 'Save'),
        button({ className: 'f3 pv2 ph3 bg-light-grey bn mr2 dim', type: 'button', onclick: () => dispatch(showFormMsg(false)) }, 'Cancel')
    ])
}

function formView(dispatch, { description, calories, showForm, editId }) {
    if (showForm) {
        return form({
            className: 'w-100 mv2',
            onsubmit: e => {
                e.preventDefault();
                dispatch(saveMealMsg)
            }
        },
            [fieldSet('Meal', description, e => dispatch(mealInputMsg(e.target.value))),
            fieldSet('Caleories', calories || '', e => dispatch(caloriesInputMsg(e.target.value))),
            buttonSet(dispatch)])
    } else {
        return button({ className: 'fv pv2 ph3 bg-blue white bn', onclick: () => dispatch(showFormMsg(true)) }, 'Add Meal');
    }
}

function view(dispatch, model) {
    return div({ className: 'mw6 center' }, [
        h1({ className: '' }, 'Caleory Counter'),
        formView(dispatch, model),
        mealsTable(dispatch, model.meals),
        pre(JSON.stringify(model, null, 2))
    ])
}

function cell(tag, classes, value) {
    return tag({ className: classes }, value);
}

function mealRow(dispatch, classes, meal) {
    return tr({ className: classes }, [
        cell(td, 'pa2', meal.description),
        cell(td, 'pa2 tr', meal.calories),
        cell(td, 'pa2 tr', [
            i({ className: 'ph1 fa fa-trash-o pointer', onclick: () => dispatch(deleteMealMsg(meal.id)) }),
            i({ className: 'ph1 fa fa-pencil-square-o pointer', onclick: () => dispatch(editMealMsg(meal.id)) })
        ])
    ]);
}

function mealBody(dispatch, meals) {
    const rows = R.map(R.partial(mealRow, [dispatch, 'stripe-dark']))(meals);
    const body = R.append(totalRow(meals), rows);
    return tbody([body]);
}

const mealHeader = thead([
    tr([
        cell(td, 'pa2 tl', 'Meal'),
        cell(td, 'pa2 tr', 'Caleories'),
        cell(td, '', '')
    ])
]);


function mealsTable(dispatch, meals) {
    if (meals.length === 0) {
        return div({ className: 'mv2 i black-50' }, 'No Meals today!')
    } else {
        return table({ className: 'mw5 center w-100 collapse' }, [mealHeader, mealBody(dispatch, meals)])
    }

}

function totalRow(meals) {
    const sum = R.pipe(
        R.map(meal => meal.calories),
        R.sum
    )(meals);
    return tr({ className: 'bt b' }, [
        cell(td, 'pa2 tr', 'Total'),
        cell(td, 'pa2 tr', sum),
        cell(td, 'pa2 tr', '')
    ])
}


export default view;