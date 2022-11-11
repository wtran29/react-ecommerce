
import './components/directory/category-list.scss';
import CategoryList from './components/directory/category-list';

const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/YN8tWR5/categories-hats.jpg"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/CB1L00V/categories-jackets.jpg"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/YWMvkL7/categories-sneakers.jpg"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/Gcy4MjS/categories-womens.jpg"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/wW4Rjrt/categories-mens.jpg"
    }
  ];

return (
    <div className="App">
      <CategoryList categories={categories} />
    </div>
  );
};

export default App;
