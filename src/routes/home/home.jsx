import { Outlet } from 'react-router';

import '../../components/directory/category-list.scss';
import CategoryList from '../../components/directory/category-list';

const Home = () => {
  const categories = [
    {
      "id": 1,
      "title": "HATS",
      "imageUrl": "https://i.ibb.co/YN8tWR5/categories-hats.jpg"
    },
    {
      "id": 2,
      "title": "JACKETS",
      "imageUrl": "https://i.ibb.co/CB1L00V/categories-jackets.jpg"
    },
    {
      "id": 3,
      "title": "SNEAKERS",
      "imageUrl": "https://i.ibb.co/YWMvkL7/categories-sneakers.jpg"
    },
    {
      "id": 4,
      "title": "WOMENS",
      "imageUrl": "https://i.ibb.co/Gcy4MjS/categories-womens.jpg"
    },
    {
      "id": 5,
      "title": "MENS",
      "imageUrl": "https://i.ibb.co/wW4Rjrt/categories-mens.jpg"
    }
  ];

return (
    <div className="App">
        
      <CategoryList categories={categories} />
      <Outlet />
    </div>
  );
};


export default Home;