import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getRecipes() {
        const key = 'dfc61cd52dcae05e5a0ac1c99fc35954';
        const baseUrl = 'https://www.food2fork.com/api/';
        try {
            const response = await axios(`${baseUrl}search?key=${key}&q=${this.query}`);
            this.recipes = response.data.recipes;
        } catch (err) {
            alert(err);
        }

    }

}