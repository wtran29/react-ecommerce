import { Outlet } from 'react-router';

import '../../components/directory/category-list.styles.jsx';
import CategoryList from '../../components/directory/category-list';

const Home = () => {
  

return (
    <div className="App">
        
      <CategoryList/>
      <Outlet />
    </div>
  );
};


export default Home;