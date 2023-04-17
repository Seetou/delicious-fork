import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillStar, AiOutlineUser } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
const RecipeCard = ({
  publisher,
  title,
  source_url,
  recipe_id,
  image_url,
  social_rank,
  userHasCreated,
  handleDeleteRecipe,
}) => {
  return (
    <Linked>
      <Link to={`/recipe/${recipe_id}`}>
        <div className="card-header">
          <img
            src={
              image_url
                ? image_url
                : "https://cdn.pixabay.com/photo/2014/03/25/16/55/restaurant-297621__340.png"
            }
            alt={title}
          />
        </div>
      </Link>

      <div className="recipe-card-info">
        <h3>{title.substring(0, 20)}...</h3>
        <div className="card-details">
          <div className="recipe-score">
            <AiFillStar />

            <p>{Math.floor(social_rank)}k</p>
          </div>
          <div className="publisher">
            <AiOutlineUser />
            <p>{publisher}</p>
          </div>

          {userHasCreated && (
            <div className="card-delete-btn">
              <button
                onClick={() => {
                  handleDeleteRecipe(recipe_id);
                }}
              >
                <MdDelete />
              </button>
            </div>
          )}
        </div>
      </div>
    </Linked>
  );
};

export default RecipeCard;

const Linked = styled.article`
  width: 300px;
  margin-top: 2rem;
  border-radius: 5px;
  text-decoration: none;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  .card-header {
    overflow: hidden;
    border-radius: 5px;

    img {
      object-fit: cover;
      width: 100%;
      height: 200px;
      transition: all 0.8s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .recipe-card-info {
    padding: 1rem;

    h3 {
      font-size: 1.5rem;
      color: var(--pm-clr);
      font-weight: 600;
    }
  }

  .card-details {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 400;
    font-size: 1rem;
    gap: 1rem;

    .recipe-score,
    .publisher {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: var(--sd-clr);
        margin-right: 0.2rem;
      }

      p {
        color: var(--svg-clr);
      }
    }
  }
  .card-delete-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      background: transparent;
      outline: none;
      padding: 0.2rem;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--svg-clr);

      &:hover {
        border: 1px solid var(--badge-clr);
      }

      svg {
        color: var(--svg-clr);
        font-size: 2rem;

        &:hover {
          color: var(--badge-clr);
        }
      }
    }
  }
`;
