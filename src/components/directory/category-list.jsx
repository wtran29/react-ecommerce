import './category-list.scss';
import CategoryItem from '../category-item/category-item';

const CategoryList = ({ categories }) => (
    <div className='category-list'>
        {categories.map((category) => {
            return <CategoryItem key={category.id} category={category} />
        })}
    </div>
);

export default CategoryList;