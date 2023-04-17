import styled from "styled-components";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "../../Components";
import { AiFillStar, AiOutlineUser } from "react-icons/ai";
import { MainWrapper } from "../../Components";

const RecipeDetails = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({
    publisher: "",
    ingredients: [],
    image_url: "",
    social_rank: 0,
    title: "",
  });

  const navigate = useNavigate();

  const FetchDetails = async () => {
    setLoading(true);

    try {
      // FETCH LOCAL DATA BEFORE ************************

      const localData = await JSON.parse(
        localStorage.getItem("UserAllRecipes")
      );
      if (localData !== null) {
        const recipe = localData.find((recipe) => recipe.recipe_id === name);
        if (recipe !== undefined) {
          setDetails({ ...details, ...recipe });
          return;
        }
      }

      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/get?rId=${name}`
      );
      const data = await response.json();
      if (!data.recipe) {
        setLoading(false);
        return;
      }
      setDetails({ ...details, ...data.recipe });

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchDetails();
  }, []);

  if (loading) {
    <Loader />;
  }
  const { publisher, ingredients, image_url, social_rank, title } = details;

  return (
    <MainWrapper>
      <RecipeDetailsWrapper>
        <div className="section-title">
          <h2>Recipe Details</h2>
          <div className="subline"></div>
        </div>
        <div className="container">
          <article>
            <img src={image_url} alt="" />
            <div className="recipe-info">
              <h3>{title}</h3>
              <div className="recipe-stats">
                <div className="recipe-score">
                  <AiFillStar />
                  <p>{Math.floor(social_rank)}k</p>
                </div>
                <div className="recipe-publisher">
                  <AiOutlineUser />
                  <p>{publisher}</p>
                </div>
              </div>

              <p className="ingredient-title">Ingredients:</p>
              <ul>
                {ingredients.map((ingredient, index) => {
                  return <li key={index}>{ingredient}</li>;
                })}
              </ul>
            </div>
          </article>
        </div>
        <button onClick={() => navigate(-1)}>Back</button>
      </RecipeDetailsWrapper>
    </MainWrapper>
  );
};

export default RecipeDetails;

const RecipeDetailsWrapper = styled.section`
  margin: 3rem 0;
  min-height: 100vh;

  .section-title h2 {
    font-weight: 400;
    font-size: 2rem;
  }

  button {
    margin-top: 3rem;
    padding: 1rem 2rem;
    text-transform: uppercase;
    background: var(--pm-clr);
    outline: none;
    border: none;
    color: white;
    border-radius: 5px;
    font-size: 1.5rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      background: var(--sd-clr);
      color: var(--pm-clr);
    }
  }

  .container {
    margin-top: 3rem;

    article {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2rem;

      img {
        min-width: 300px;
        width: 600px;
        border-radius: 5px;
        border: 1px solid var(--sd-clr);
        object-fit: contain;
      }

      .recipe-info {
        width: 100%;

        h3 {
          font-size: 2rem;
          font-weight: 600;
          color: var(--pm-clr);
        }

        .recipe-stats {
          display: flex;
          font-size: 1.3rem;
          gap: 2rem;
          color: var(--svg-hover-clr);
          margin-top: 0.5rem;

          .recipe-score {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 0.5rem;
          }

          .recipe-publisher {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 0.5rem;
          }
        }

        .ingredient-title {
          font-size: 1.5rem;
          margin-top: 1rem;
          color: var(--svg-hover-clr);
          background: var(--sd-clr);
          width: fit-content;
          padding: 0.5rem 1rem;
          border-radius: 5px;
        }

        ul {
          font-size: 1.2rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: auto;
          column-gap: 3rem;
          align-content: center;
          padding-left: 2rem;
          margin-top: 1rem;
          color: var(--pm-clr);
        }
      }
      @media (max-width: 62.5em) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
      }

      @media (max-width: 37.5em) {
        padding: 0 1rem;
        img {
          width: 100vw;
        }
      }

      @media (max-width: 31.25em) {
        .recipe-info ul {
          grid-template-columns: 1fr;
          grid-template-rows: auto;
        }
      }
    }
  }
`;
