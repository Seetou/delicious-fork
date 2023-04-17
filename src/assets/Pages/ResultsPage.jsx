import { useParams, useNavigate } from "react-router-dom";
import { Loader } from "../../Components";
import { useEffect, useState } from "react";
import { API_URL } from "../const/const-data";
import { RecipeCard } from "../../Components";
import styled from "styled-components";
import { MainWrapper } from "../../Components";

const ResultsPage = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState();
  const { name } = useParams();
  const navigate = useNavigate();

  const fetchRecipe = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}${name}`);
      const data = await response.json();
      if (!data.count) {
        setLoading(false);
        return;
      }
      setResults(data.recipes);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <MainWrapper>
      <ResultsSection>
        <div className="section-title">
          <h2>Results for "{name}"</h2>
          <div className="subline"></div>
        </div>
        <div className="results-wrapper">
          {results ? (
            results.map((recipe) => {
              return <RecipeCard key={recipe.recipe_id} {...recipe} />;
            })
          ) : (
            <h2 className="no-recipe">
              Couldn't find recipe with that name 😥.
            </h2>
          )}
        </div>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </ResultsSection>
    </MainWrapper>
  );
};

export default ResultsPage;

const ResultsSection = styled.section`
  margin: 3rem 0;
  min-height: 100vh;

  .no-recipe {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 3rem;
    color: var(--pm-clr);
  }

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
  .results-wrapper {
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, minmax(max-content, 300px));
    grid-auto-rows: 30rem;
    gap: 2rem;

    @media (max-width: 59.375em) {
      grid-template-columns: repeat(2, minmax(max-content, 300px));
    }
    @media (max-width: 39.375em) {
      grid-template-columns: repeat(1, minmax(max-content, 300px));
    }
  }
`;
