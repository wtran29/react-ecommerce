import { HomeCategoryContainer, BackgroundImage, Body } from "./home-category-item.styles";

const CategoryItem = ({ category }) => {
    const {imageUrl, title} = category;
    return (
        <HomeCategoryContainer>
          <BackgroundImage imageUrl={imageUrl}/>
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </HomeCategoryContainer>
    )
}

export default CategoryItem;