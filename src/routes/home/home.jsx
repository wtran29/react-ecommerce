import { Outlet } from 'react-router';

import '../../components/directory/category-list.scss';
import CategoryList from '../../components/directory/category-list';

const Home = () => {
  const categories = [
    {
      "id": 1,
      "title": "HATS",
      "imageUrl": "https://i.ibb.co/grBbZyC/categories-hats.jpg"
    },
    {
      "id": 2,
      "title": "JACKETS",
      "imageUrl": "https://i.ibb.co/xX8Pj9Q/categories-jackets.jpg"
    },
    {
      "id": 3,
      "title": "SNEAKERS",
      "imageUrl": "https://i.ibb.co/FwVkkzd/categories-sneakers.jpg"
    },
    {
      "id": 4,
      "title": "WOMENS",
      "imageUrl": "https://i.ibb.co/ZKSW2b1/categories-womens.jpg"
    },
    {
      "id": 5,
      "title": "MENS",
      "imageUrl": "https://i.ibb.co/0XYKGjM/categories-mens.jpg"
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