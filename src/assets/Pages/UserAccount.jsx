import React, { useEffect, useContext, useState } from "react";
import { MainWrapper, RecipeCard } from "../../Components";
import styled from "styled-components";
import { AppContext } from "../../Components/GlobalContext";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import OverlayComponent from "../../Components/OverlayComponent";

import CreateRecipe from "../../Components/CreateRecipe";

const defaultAvatar =
  "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg";

const UserAccount = () => {
  const tempData = [];
  const [UserAllRecipes, setUserAllRecipes] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const { UserDetails, setShowOverlayComponent, showOverlayComponent } =
    useContext(AppContext);
  // const [ingArr, setIngArr] = useState();

  const handleDeleteRecipe = (recipe_id) => {
    let filterArray = UserAllRecipes.filter(
      (recipe) => recipe.recipe_id !== recipe_id
    );
    setUserAllRecipes(filterArray);
  };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("UserAllRecipes"));
    if (localData !== null) setUserAllRecipes(localData);
  }, []);

  useEffect(() => {
    localStorage.setItem("UserAllRecipes", JSON.stringify(UserAllRecipes));
  }, [UserAllRecipes]);

  // let tempArray = [];

  // const handleRecipeForm = (e) => {
  //   e.preventDefault();
  //   setUserNewRecipe({
  //     ...userNewRecipe,
  //     [e.target.name]: e.target.value,
  //     ingredients: tempArray,
  //   });
  // };

  // const handleIngredients = (e, index) => {
  //   {
  //     tempArray[index] = e.target.value;
  //   }
  // };

  return (
    <>
      {isCreating
        ? setShowOverlayComponent(true)
        : setShowOverlayComponent(false)}

      <MainWrapper>
        <UserAccountWrapper>
          <div className="account-header">
            <article>
              <img
                src={`${
                  UserDetails?.photoURL ? UserDetails.photoURL : defaultAvatar
                }`}
                alt="user photo"
              />
              <div className="user-infos">
                <h3>{UserDetails?.displayName}</h3>
                <h3>{UserDetails?.email}</h3>
              </div>
            </article>
          </div>
          <UserRecipesCreated>
            <div className="section-title">
              <h2>My Recipes</h2>
              <div className="subline"></div>
            </div>
            <div className="user-recipes-list">
              <button
                className="add-recipe-btn"
                onClick={() => setIsCreating(true)}
              >
                <HiOutlineViewGridAdd />
              </button>
              {/************************************************** CREATE FORM **************************************************************/}
              {isCreating && (
                <CreateRecipe
                  UserAllRecipes={UserAllRecipes}
                  setUserAllRecipes={setUserAllRecipes}
                  handleDeleteRecipe={handleDeleteRecipe}
                  setIsCreating={setIsCreating}
                />
              )}
              {/* ************************** MAPPING RECIPES *********************************************/}
              {UserAllRecipes.length > 0 ? (
                UserAllRecipes.map((recipe) => {
                  return (
                    <RecipeCard
                      key={recipe.recipe_id}
                      {...recipe}
                      handleDeleteRecipe={handleDeleteRecipe}
                    />
                  );
                })
              ) : (
                <h3 className="no-recipe-heading">Create your first recipe.</h3>
              )}
            </div>
          </UserRecipesCreated>
        </UserAccountWrapper>
      </MainWrapper>
    </>
  );
};

export default UserAccount;

const UserAccountWrapper = styled.section`
  margin-top: 5rem;
  min-height: 100vh;
  .account-header {
    background: var(--pm-clr);
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    article {
      display: flex;
      align-items: center;
      padding: 2rem;
      margin-bottom: 2rem;

      img {
        width: 100px;
        object-fit: contain;
        border: 2px solid var(--bg-clr);
        border-radius: 100%;
      }

      .user-infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 2rem;

        h3 {
          font-size: 1.5rem;
          font-weight: 400;
          color: white;
        }
      }
    }
  }
`;

const UserRecipesCreated = styled.section`
  position: relative;
  .section-title h2 {
    font-weight: 400;
    font-size: 2rem;
  }
  .no-recipe-heading {
    font-size: 2rem;
    font-weight: 600;
    color: var(--pm-clr);
  }
  .user-recipes-list {
    /* position: relative; */
    margin-bottom: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    .add-recipe-btn {
      width: 300px;
      height: 275px;
      margin-top: 2rem;
      border-radius: 5px;
      border: none;
      text-decoration: none;
      background: white;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: rgba(255, 255, 255, 0.8);

        svg {
          color: var(--sd-clr);
        }
      }

      svg {
        font-size: 4rem;
        color: var(--pm-clr);
        font-weight: 400;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;
