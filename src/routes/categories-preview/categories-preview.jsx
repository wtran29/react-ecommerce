import { useContext, Fragment } from 'react';
// import { CategoriesContext } from '../../contexts/categories';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories-selector';
import CategoryPreview from '../../components/category-preview/category-preview';


const CategoriesPreview = () => {
    // const {categoriesMap} = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products}/>
                    
                })
            }
            
        </Fragment>
        
    )
}

export default CategoriesPreview;