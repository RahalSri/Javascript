import R from 'ramda';

const MSGS = {
    SHOW_FORM: 'SHOW_FORM',
    MEAL_INPUT: 'MEAL_INPUT',
    CALORIES_INPUT: 'CALORIES_INPUT',
    SAVE_MEAL: 'SAVE_MEAL',
    DELETE_MEAL: 'DELETE_MEAL',
    EDIT_MEAL: 'EDIT_MEAL',
    UPDATE_MEAL: 'UPDATE_MEAL'
}

export function showFormMsg(showForm) {
    return {
        type: MSGS.SHOW_FORM,
        showForm
    };
}

export const saveMealMsg = {
    type: MSGS.SAVE_MEAL
}

export function deleteMealMsg(id) {
    return {
        type: MSGS.DELETE_MEAL,
        id
    }
}

export function editMealMsg(id) {
    return {
        type: MSGS.EDIT_MEAL,
        id
    }
}

export function updateMealMsg(id) {
    return {
        type: MSGS.EDIT_MEAL,
        id
    }
}

export function mealInputMsg(description) {
    return {
        type: MSGS.MEAL_INPUT,
        description
    }
}

export function caloriesInputMsg(calories) {
    return {
        type: MSGS.CALORIES_INPUT,
        calories
    }
}

function update(msg, model) {
    const { showForm, description, calories, id } = msg;
    const { editId } = model;
    switch (msg.type) {
        case MSGS.SHOW_FORM:
            return { ...model, showForm, description: '', calories: 0 };
        case MSGS.MEAL_INPUT:
            return { ...model, description };
        case MSGS.CALORIES_INPUT:
            return { ...model, calories };
        case MSGS.SAVE_MEAL:

            const updatedModel = editId !== null ? editMeal(model, editId) : addMeal(model);

            return updatedModel;
        case MSGS.DELETE_MEAL:
            return deleteMeal(id, model);
        case MSGS.EDIT_MEAL:
            const meal = model.meals.find(meal => meal.id === id);
            return { ...model, description: meal.description, calories: meal.calories, editId: meal.id, showForm: true };
        case MSGS.UPDATE_MEAL:

        default:
            return model;
    }
}

function addMeal(model) {
    console.log(model);
    const { description, calories, nextId } = model;
    const meal = { description, calories, id: nextId };
    const meals = [...model.meals, meal];

    return { ...model, meals, nextId: nextId + 1, description: '', calories: 0, editId: null, showForm: false }
}

function deleteMeal(id, model) {
    const meals = model.meals.filter((meal) => meal.id !== id);
    return { ...model, meals }
}

function editMeal(model, editId) {
    const { description, calories } = model;
    const meals = model.meals.map(meal => {
        if (meal.id === editId) {
            return { ...meal, description, calories }
        } else {
            return meal;
        }
    });
    return { ...model, meals, description: '', calories: 0, editId: null, showForm: false };
}

export default update;