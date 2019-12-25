import Search from './models/Search';

const state = {};

async function controlSearch() {
    const searchKey = 'pizza';
    if (searchKey) {
        state.search = new Search('pizza');
        state.searchKey = searchKey;
        // UI spinning
        await state.search.getRecipes();
        console.log(state.search.recipes);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});




