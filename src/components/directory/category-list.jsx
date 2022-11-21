import { HomeCategoryList } from './category-list.styles';
import HomeCategoryItem from '../home-category-item/home-category-item';

const categories = [
    {
      "id": 1,
      "title": "HATS",
      "imageUrl": "https://i.ibb.co/grBbZyC/categories-hats.jpg",
      "route": 'shop/hats'
    },
    {
      "id": 2,
      "title": "JACKETS",
      "imageUrl": "https://i.ibb.co/xX8Pj9Q/categories-jackets.jpg",
      "route": 'shop/jackets'
    },
    {
      "id": 3,
      "title": "SNEAKERS",
      "imageUrl": "https://i.ibb.co/FwVkkzd/categories-sneakers.jpg",
      "route": 'shop/sneakers'
    },
    {
      "id": 4,
      "title": "WOMENS",
      "imageUrl": "https://i.ibb.co/ZKSW2b1/categories-womens.jpg",
      "route": 'shop/womens'
    },
    {
      "id": 5,
      "title": "MENS",
      "imageUrl": "https://i.ibb.co/0XYKGjM/categories-mens.jpg",
      "route": 'shop/mens'
    }
  ];

const CategoryList = () => (
    <HomeCategoryList>
        {categories.map((category) => {
            return <HomeCategoryItem key={category.id} category={category} />
        })}
    </HomeCategoryList>
);

export default CategoryList;