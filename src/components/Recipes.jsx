import { useState } from "react";

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

console.log("🚀 ~ file: index.js ~ line 8 ~ elvinGauntletRecipe", elvinGauntletRecipe);
alert(888)
const Recipes = () => {
    const [recipe, setRecipe] = useState({});
    const helloOnClickHandler = () => {
        alert(1032092039203);
    }
    return (
        <div>
            <h3>Current Recipes</h3>
            <button onClick={helloOnClickHandler}>Hello test</button>
            <button onClick={() => { alert(1); setRecipe(elvinShielRecipe) }}>Elven shield Recipe</button>
            <button onClick={() => { alert(100); setRecipe(elvinGauntletRecipe) }}>Elven Gauntlet Recipe</button>
            <ul>
                {
                    Object.keys(recipe).map(material => (
                        <li key={material}>{material}: {recipe[material]}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Recipes;