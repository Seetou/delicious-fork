import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./GlobalContext";
import { RecipeCard, Loader } from "../Components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const PopularRecipes = () => {
  const { mostPopular, setMostPopular, API_URL } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  //////////////////////////////// Fetching Data Function
  const dataFetcher = async () => {
    setLoading(true);
    try {
      if (localStorage.getItem("mostPopular")) {
        const localData = JSON.parse(localStorage.mostPopular);
        setMostPopular(localData);
        setLoading(false);
        return;
      }

      const response = await fetch(`${API_URL}Pasta`);
      const allrecipes = await response.json();
      if ((allrecipes.count = 0)) {
        console.log("No recipe found");
        return;
      }
      setMostPopular(allrecipes.recipes);
      localStorage.setItem("mostPopular", JSON.stringify(allrecipes.recipes));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  ///////////////////////////// UseEffect after load
  useEffect(() => {
    dataFetcher();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <PopularRecipesWrapper>
      <div className="section-title">
        <h2>Most Popular Recipes</h2>
        <div className="subline"></div>
      </div>
      <Splide
        className="pop-card-wrapper"
        options={{
          perPage: 3,
          // perMove: 3,
          padding: { right: "10rem" },
          breakpoints: {
            1000: {
              perPage: 2,
            },
            600: {
              perPage: 1,
            },
          },
          gap: "2rem",
          drag: "free",
          arrows: true,
          autoWidth: true,
          classes: { page: "splide__pagination__page slide-btns-page" },
        }}
      >
        {mostPopular.slice(0, 12).map((recipe) => {
          return (
            <SplideSlide key={recipe.recipe_id}>
              <RecipeCard {...recipe} />
            </SplideSlide>
          );
        })}
      </Splide>
    </PopularRecipesWrapper>
  );
};

export default PopularRecipes;

const PopularRecipesWrapper = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;

  .section-title h2 {
    font-weight: 400;
    font-size: 2rem;
  }

  .pop-card-wrapper {
    /* display: flex;
    align-items: center; */
    cursor: grab;

    .splide__pagination__page.slide-btns-page {
      display: none;
    }

    /* @media (max-width: 61.2em) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    } */
  }
`;
