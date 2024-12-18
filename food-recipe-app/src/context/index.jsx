import { createContext, useState } from "react";


export const GlobalContext = createContext(null);


export default function GlobalState({children}) {

    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        try{
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await res.json();

            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes);
                setLoading(false);
                setSearchParam('');
            }

            console.log(data);
        }catch(e){

            console.log(e);
            setLoading(false);
            setSearchParam('');
        }
    }

    function handleAddToFav(getCurrentItem){
        console.log(getCurrentItem);
        let cpyFavList = [...favoritesList];
        const index = cpyFavList.findIndex(item => item.id === getCurrentItem.id);

        if(index === -1) {
            cpyFavList.push(getCurrentItem);
        } else {
            cpyFavList.splice(index);
        }

        setFavoritesList(cpyFavList);
    }

console.log(favoritesList, 'fav list');

    return (
        <GlobalContext.Provider value={{favoritesList,loading, recipeList, searchParam, setSearchParam, handleSubmit,recipeDetailsData, setRecipeDetailsData, handleAddToFav}}>{children}</GlobalContext.Provider>
    )
}