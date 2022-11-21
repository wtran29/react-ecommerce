import { createContext, useEffect, useState } from "react";
// one off usage to upload products to firebase
// import SHOP_DATA from "../shop-data";

import { addCollectionAndDocs, getCategoriesAndDocs } from "../utils/firebase/firebase";

export const CategoriesContext = createContext({
    categoriesMap: {},
    
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    // one off usage to upload products to firebase
    // useEffect(() => {
    //     addCollectionAndDocs('categories', SHOP_DATA)
    // }, []);
    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocs();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);
    const value = {categoriesMap};

    

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
