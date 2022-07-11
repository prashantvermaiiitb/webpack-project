import './styles/index.css';

const elvinShielRecipe = {
    leatherJackets: 221,
    ironIgnot: 1,
    refinedMoonStone: 4
}

const elvinGauntletRecipe = {
    ...elvinShielRecipe,
    leather: 1,
    refinedMoonStone: 61
};
console.log("🚀 ~ file: index.js ~ line 6 ~ elvinShielRecipe", elvinShielRecipe);

console.log("🚀 ~ file: index.js ~ line 8 ~ elvinGauntletRecipe", elvinGauntletRecipe)
