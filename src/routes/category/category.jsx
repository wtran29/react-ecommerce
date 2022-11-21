import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories';

import ProductCard from '../../components/product-card/product-card';

import './category.scss';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-routes-title'>{category.toUpperCase()}</h2>
            <div className='category-routes-container'>
                
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </Fragment>
        
    )
}

export default Category;