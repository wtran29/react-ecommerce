import { createContext, useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getCategoriesAndDocs } from "../../utils/firebase/firebase";
import CategoriesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import { setCategoriesMap } from "../../store/categories/categories-action";

// import './shop.styles.jsx';

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocs();
            dispatch(setCategoriesMap(categoryMap));
        }
        getCategoriesMap();
    }, [dispatch]);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop;