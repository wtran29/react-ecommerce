import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
// import { CategoriesContext } from '../../contexts/categories';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card';
import { selectCategoriesMap } from '../../store/categories/categories-selector';

import { CategoryRoutesContainer, CategoryRoutesTitle } from './category.styles';

const Category = () => {
    const {category} = useParams();
    // const {categoriesMap} = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryRoutesTitle>{category.toUpperCase()}</CategoryRoutesTitle>
            <CategoryRoutesContainer>
                
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                ))}
            </CategoryRoutesContainer>
        </Fragment>
        
    )
}

export default Category;