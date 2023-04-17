import { reviewsData } from "../assets/const/const-data";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Reviews = () => {
  return (
    <ReviewsWrapper>
      <div className="section-title">
        <h2>Check Out Recent Reviews</h2>
        <div className="subline"></div>
      </div>

      <Splide
        className="articleWrapper"
        options={{
          perPage: 2,
          breakpoints: {
            910: {
              perPage: 1,
            },
          },
          gap: "2rem",
          drag: "free",
          arrows: false,
          classes: { page: "splide__pagination__page slide-btns-page" },
        }}
      >
        {reviewsData.map((reviewer) => {
          const {
            user_id,
            user_image,
            firstname,
            lastname,
            comment_title,
            comment,
            created,
          } = reviewer;
          return (
            <SplideSlide key={user_id}>
              <article>
                <div className="review-header">
                  <img src={user_image} alt={firstname} />
                </div>
                <div className="review-content">
                  <h3>{`${firstname} ${lastname}`}</h3>
                  <h4 className="comment-title">{comment_title}</h4>
                  <p className="comment-text">{comment}</p>
                  <span></span>
                  <p className="comment-date">{created}</p>
                </div>
              </article>
            </SplideSlide>
          );
        })}
      </Splide>
    </ReviewsWrapper>
  );
};

export default Reviews;

const ReviewsWrapper = styled.section`
  margin-top: 3rem;
  margin-bottom: 10rem;
  width: 100%;
  cursor: grab;

  .section-title h2 {
    font-weight: 400;
    font-size: 2rem;
  }

  .articleWrapper {
    margin-top: 2rem;
    padding-bottom: 3rem;
    width: 100%;
    display: flex;

    .splide__pagination__page.slide-btns-page {
      background: var(--sd-clr);
    }

    article {
      display: flex;
      padding: 2rem;
      background: white;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      border-radius: 5px;

      .review-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;

        img {
          border-radius: 50%;
          width: 100px;
          border-bottom: 3px solid var(--sd-clr);
        }
      }

      .review-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        h3 {
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--pm-clr);
          margin-bottom: 0.5rem;
        }

        .comment-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--pm-clr);
        }

        .comment-text {
          font-size: 1.1rem;
        }

        span {
          border: 0.5px solid var(--bg-clr);
          width: 100%;
          margin-top: 1rem;
        }

        .comment-date {
          font-weight: 600;
          color: var(--pm-clr);
          margin-top: 0.5rem;
        }
      }
    }
  }
`;
