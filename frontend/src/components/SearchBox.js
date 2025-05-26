import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchForm = styled(Form)`
  display: flex;
  width: 100%;
  
  .form-control {
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    color: #fff;
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
    border-radius: 8px 0 0 8px;
    transition: all 0.3s ease;

    &::placeholder {
      color: #adb5bd;
    }

    &:focus {
      background-color: rgba(255, 255, 255, 0.15);
      box-shadow: none;
      color: #fff;
    }
  }

  .btn {
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    color: #fff;
    padding: 0.75rem 1.25rem;
    border-radius: 0 8px 8px 0;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      color: #fff;
    }

    &:focus {
      box-shadow: none;
    }
  }
`;

function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push(history.location.pathname);
    }
  };

  return (
    <SearchForm onSubmit={submitHandler}>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search products..."
      />
      <Button type="submit">
        <FaSearch />
      </Button>
    </SearchForm>
  );
}

export default SearchBox;
