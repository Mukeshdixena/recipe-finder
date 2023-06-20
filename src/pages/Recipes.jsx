import { useEffect, useState } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../services/api";

const Recipes = () => {
    const [searchedQuery, setSearchedQuery] = useState('pizza');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getSearchedResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchedQuery])

    const getSearchedResult = async () => {
        let result = await getRecipes(searchedQuery);
        if (result && result.recipes) {
            setRecipes(result.recipes);
        }
    }

    return (
        <>
        <div className="recipe-body">

            <Search setSearchedQuery={setSearchedQuery} />
            <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
        </div>
        </>
    )
}

export default Recipes;