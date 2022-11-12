import styled from "styled-components";
import { devices } from "../breakpoints";

export const HomeContainer = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;
  padding-bottom: 3rem;
  padding-left: 2rem;

  @media ${devices.smallMobiles} {
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
  }

  .searchInput::placeholder,
  .searchInput:focus {
    text-align: center;

    @media ${devices.tabletsAndIpads} {
      font-size: 14px;
    }

    @media ${devices.tabletsAndMobiles} {
      font-size: 14px;
    }

    @media ${devices.smallMobiles} {
      font-size: 14px;
    }
  }
`;

export const FeatureBox = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${devices.smallMobiles} {
    /* padding: 1rem 1rem; */
    padding-top: 1rem;
    gap: 10px;
  }
`;

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  column-gap: 40px;
  row-gap: 60px;
  justify-content: center;

  @media ${devices.tabletsAndIpads} {
    grid-template-columns: repeat(3, 200px);
    column-gap: 40px;
    row-gap: 60px;
    padding: 20px 20px;
  }

  @media ${devices.tabletsAndMobiles} {
    grid-template-columns: repeat(2, 200px);
    column-gap: 40px;
    row-gap: 60px;
    padding: 20px 20px;
  }

  @media ${devices.smallMobiles} {
    margin-top: 40px;
    justify-content: center;
    grid-template-columns: repeat(1, 200px);
  }
`;

export const HeaderSubtitle = styled.h2`
  background: linear-gradient(to right, #348f50, #56b4d3);
  font-size: 30px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-top: 40px;
  text-align: center;
`;

export const SearchResults = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 10px;

  h2 {
    color: white;
    font-size: 26px;
  }

  span {
    font-size: 26px;
    color: red;
  }
`;
