import styled from "styled-components";
import { MovieButton } from "./Button";
import { devices } from "../breakpoints";

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 40px;
  gap: 20px;

  @media ${devices.smallMobiles} {
    margin-bottom: 20px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    margin-left: 20px;
    flex-direction: column;
  }

  @media ${devices.tabletsAndIpads} {
    margin-bottom: 40px;
    margin-top: 30px;
  }

  @media ${devices.tabletsAndMobiles} {
    margin-bottom: 30px;
    margin-top: 30px;
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  justify-content: center;
  width: 30%;
  height: 50px;
  font-size: 20px;
  border: 1px solid gray;
  outline: none;
  border-radius: 15px;

  :focus {
    text-align: center;
  }

  ::placeholder {
    text-align: center;
  }

  @media ${devices.tabletsAndIpads} {
    height: 40px;
    font-size: 16px;
  }

  @media ${devices.tabletsAndMobiles} {
    width: 80%;
  }

  @media ${devices.smallMobiles} {
    height: 40px;
    font-size: 12px;
    border: 1px solid gray;
    outline: none;
    width: 100%;

    :focus {
      text-align: center;
    }

    ::placeholder {
      text-align: center;
    }
  }
`;

export const SearchButton = styled(MovieButton)`
  color: white;
  background-color: red;
  font-size: 18px;

  :hover {
    background-color: #ff4500;
  }

  @media ${devices.smallMobiles}{
    font-size: 12px;

  }
`;
