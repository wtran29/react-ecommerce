import { HomeCategoryContainer, BackgroundImage, Body } from "./home-category-item.styles";

import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
    const {imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <HomeCategoryContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl={imageUrl}/>
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </HomeCategoryContainer>
    )
}

export default CategoryItem;