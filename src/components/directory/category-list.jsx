import './category-list.scss';
import HomeCategoryItem from '../home-category-item/home-category-item';

const CategoryList = ({ categories }) => (
    <div className='category-list'>
        {categories.map((category) => {
            return <HomeCategoryItem key={category.id} category={category} />
        })}
    </div>
);

export default CategoryList;