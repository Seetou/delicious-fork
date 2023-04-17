import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Form = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const inputTab = useRef();

  const ChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const FormSubmit = (e) => {
    e.preventDefault;
    navigate(`/category/${search}`);
    setSearch("");
  };

  useEffect(() => {
    inputTab.current.focus();
  }, []);

  return (
    <FormWrapper>
      <form onSubmit={FormSubmit}>
        <BiSearch />
        <input
          type="text"
          id="search"
          placeholder="Pizza"
          value={search}
          onChange={ChangeHandler}
          ref={inputTab}
        />
      </form>
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
    max-width: 600px;
    position: relative;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  svg {
    font-size: 3rem;
    font-weight: 200;
    margin-left: 1rem;
    color: var(--td-clr);
    position: absolute;
  }

  input {
    width: 100%;
    outline: none;
    padding: 1.2rem 5rem;
    background: var(--bg-clr);
    border-radius: 5px;
    color: var(--pm-clr);
    border: none;

    &::placeholder {
      color: var(--td-clr);
      font-weight: 600;
      font-size: 1.5rem;
      font-family: var(--ff);
    }
  }
`;
