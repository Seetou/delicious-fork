import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

const recipe_img_placeholder =
  "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png";

const CreateRecipe = ({ UserAllRecipes, setUserAllRecipes, setIsCreating }) => {
  const [showValidator, setShowValidator] = useState(false);
  const handleImgSubmit = (e) => {
    setRecipe_Img_url(e.target.value);
  };

  const handleTitleSubmit = (e) => {
    setRecipe_title(e.target.value);
  };

  const handleRecipeFormSubmit = (e) => {
    e.preventDefault();
    if (!recipe_title) {
      setShowValidator(true);
      return;
    }
    setUserAllRecipes([
      ...UserAllRecipes,
      {
        recipe_id: uuidv4(),
        publisher: "",
        image_url: recipe_image_url,
        title: recipe_title,
        social_rank: 0,
        userHasCreated: true,
        ingredients: [
          ingredient1,
          ingredient2,
          ingredient3,
          ingredient4,
          ingredient5,
          ingredient6,
        ],
      },
    ]);

    setRecipe_Img_url("");
    setRecipe_title("");
    setIngredient1("");
    setIngredient2("");
    setIngredient3("");
    setIngredient4("");
    setIngredient5("");
    setIngredient6("");

    setIsCreating(false);
  };

  const [recipe_image_url, setRecipe_Img_url] = useState("");
  const [recipe_title, setRecipe_title] = useState("");
  const [ingredient1, setIngredient1] = useState("");
  const [ingredient2, setIngredient2] = useState("");
  const [ingredient3, setIngredient3] = useState("");
  const [ingredient4, setIngredient4] = useState("");
  const [ingredient5, setIngredient5] = useState("");
  const [ingredient6, setIngredient6] = useState("");

  const recipe_titleRef = useRef();

  return (
    <CreateRecipeForm onSubmit={handleRecipeFormSubmit}>
      <div className="close-btn-container">
        <button
          onClick={() => setIsCreating(false)}
          type="button"
          className="close-recipe-creator-form"
        >
          <AiFillCloseCircle />
        </button>
      </div>

      <img src={recipe_img_placeholder} alt="recipe photo" />

      <input
        type="file"
        name="image_url"
        id=""
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleImgSubmit}
      />
      {showValidator && <h3 className="error-validator">Title is required!</h3>}
      <label htmlFor="title">Title</label>

      <input
        type="text"
        name="title"
        id="recipe_title"
        placeholder="Title"
        value={recipe_title}
        onChange={handleTitleSubmit}
      />
      <div className="ingredients-wrapper">
        <div>
          <label htmlFor="ingredient1">Ingredient 1</label>
          <input
            type="text"
            name="ingredient1"
            placeholder="Add ingredient 1"
            value={ingredient1}
            onChange={(e) => setIngredient1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ingredient2">Ingredient 2</label>
          <input
            type="text"
            name="ingredient2"
            placeholder="Add ingredient 2"
            value={ingredient2}
            onChange={(e) => setIngredient2(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ingredient3">Ingredient 3</label>
          <input
            type="text"
            name="ingredient3"
            placeholder="Add ingredient 3"
            value={ingredient3}
            onChange={(e) => setIngredient3(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ingredient4">Ingredient 4</label>
          <input
            type="text"
            name="ingredient4"
            placeholder="Add ingredient 4"
            value={ingredient4}
            onChange={(e) => setIngredient4(e.target.value)}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="ingredient5">Ingredient 5</label>
          <input
            type="text"
            name="ingredient5"
            placeholder="Add ingredient 5"
            value={ingredient5}
            onChange={(e) => setIngredient5(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ingredient6">Ingredient 6</label>
          <input
            type="text"
            name="ingredient6"
            placeholder="Add ingredient 6"
            value={ingredient6}
            onChange={(e) => setIngredient6(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" onClick={handleRecipeFormSubmit}>
        create
      </button>
    </CreateRecipeForm>
  );
};

export default CreateRecipe;

const CreateRecipeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 400px;
  width: 100%;
  background: white;
  position: absolute;
  z-index: 999;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  .error-validator {
    color: var(--badge-clr);
    font-weight: 600;
    font-size: 1.2rem;
  }

  button {
    width: 100%;
    border: none;
    padding: 1rem 2rem;
    background: var(--pm-clr);
    color: white;
    border-radius: 5px;
    text-transform: uppercase;
    margin-top: 2rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      background: var(--sd-clr);
      color: var(--pm-clr);
    }
  }

  @media (max-width: 31.25em) {
    min-width: 300px;
  }

  .close-btn-container {
    position: relative;
    width: 100%;
    button {
      max-width: 0;
      background: none;
      outline: none;
      right: 0;
      top: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: absolute;
      z-index: 999;

      svg {
        font-size: 4rem;
        color: var(--badge-clr);
        pointer-events: none;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        border-radius: 100%;
      }
    }
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
    border: 1px solid var(--bg-clr);
  }
  label {
    font-size: 1.3rem;
    color: var(--pm-clr);
  }

  input[type="file"] {
    margin: 2rem 0;
  }
  input[name="title"] {
    padding: 0.5rem 2rem;
    color: var(--pm-clr);

    &:focus {
      outline: none;
      border: none;
      border-bottom: 2px solid var(--sd-clr);
    }
  }

  .ingredients-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;

    div {
      display: flex;
      flex-direction: column;

      input {
        padding: 0.5rem 2rem;
        color: var(--pm-clr);
        &:focus {
          outline: none;
          border: none;
          border-bottom: 2px solid var(--sd-clr);
        }
      }
    }
  }
`;
