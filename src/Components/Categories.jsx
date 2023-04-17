import React from "react";
import { categoriesData } from "../assets/const/const-data";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <CategoriesWrapper>
      <div className="section-title">
        <h2>Categories</h2>
        <div className="subline"></div>
      </div>
      <div className="cat-container">
        {categoriesData.map((category, index) => {
          return (
            <Link key={index} to={`/category/${category}`} className="cat-btn">
              {category}
            </Link>
          );
        })}
      </div>
    </CategoriesWrapper>
  );
};

export default Categories;

const CategoriesWrapper = styled.section`
  .section-title h2 {
    font-weight: 400;
    font-size: 2rem;
  }
  .cat-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    align-items: center;
    justify-items: center;
    justify-content: center;
    gap: 2rem;

    padding: 5rem;

    @media (max-width: 56.875em) {
      grid-template-columns: repeat(2, 1fr);
    }

    .cat-btn {
      text-transform: uppercase;
      color: var(--pm-clr);
      width: 100%;
      font-size: 1.5rem;
      align-self: center;
      justify-self: center;
      text-align: center;
      background: white;
      padding: 1rem 2rem;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      transition: all 0.4s ease-in-out;

      &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        background: var(--pm-clr);
        color: white;
      }
    }
  }
`;
